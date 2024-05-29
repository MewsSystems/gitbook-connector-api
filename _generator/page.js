import { Edge, edgeGlobals } from 'edge.js';
import { tagToPageName, Comparer } from './utils.js';
import path from 'node:path';
import fs from 'node:fs/promises';

import { propertyContract, propertyType } from './jsonschema.js';
import { collectSchemas, SchemasAccumulator } from './schema.js';

/**
 * @typedef { import('oas/operation').Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 * @typedef { import('openapi-types').OpenAPIV3.ResponseObject } ResponseObject
 * @typedef { import('openapi-types').OpenAPIV3.Document } OASDocument
 * @typedef { import('oas').default } Oas
 * @typedef {{
 *    summary: string,
 *    operationId: string,
 *    description: string,
 *    path: string,
 *    method: string,
 *    deprecated: boolean,
 *    requestExample: any,
 *    requestSchemas: SchemaObject[],
 *    responseExample: any,
 *    responseSchemas: SchemaObject[],
 * }} OperationTemplateData
 */

const edge = Edge.create();
edge.mount(new URL('./templates', import.meta.url));
edge.global('helpers', {
  json(obj) {
    return edgeGlobals.html.safe(JSON.stringify(obj, null, 2));
  },
  propertyContract,
  propertyType,
});

function outputFileName(outputPath, tagName) {
  return path.join(outputPath, `${tagToPageName(tagName)}.md`);
}

/**
 * @param {string} tagName
 * @param {Operation[]} operations
 * @param {string} outputPath
 * @returns {Promise<void>}
 */
export async function renderPage(tagName, operations, outputPath) {
  const templateData = prepareTemplateData(tagName, operations);
  const md = await edge.render('resource', templateData);
  const fileName = outputFileName(outputPath, tagName);
  const mdAdjusted =
    md
      .trim()
      .replace(/\([^\(]+connector-api\/operations\/(.+?)\/(.+?)\)/g, '($1.md$2)')
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n') + '\n';
  return fs.writeFile(fileName, mdAdjusted, 'utf-8');
}

/**
 * @param {string} tagName
 * @param {Operation[]} oasOperations
 * @returns {{ resourceName: string, operations: OperationTemplateData[] }}
 */
function prepareTemplateData(tagName, oasOperations) {
  let knownSchemas = new Map();
  const schemaComparer = new Comparer(schemaSortOrder, function (schema) { return schema.id.toLowerCase().replace('x-ref-name-', '').replace('enum', ''); })
  const templateOperations = oasOperations
    .map((operation) => {
      const operationId = operation.getOperationId();

      // collect response schemas first so that shared schemas appear next to response
      const response =
        operation.getResponseByStatusCode(200).content['application/json'];
      const responseExample = response.example || {};
      const responseSchemas = collectSchemas(
        response.schema,
        [operationId, 'response'],
        new SchemasAccumulator(knownSchemas)
      );

      const request = operation.getRequestBody('application/json');
      const requestExample = request.example || {};
      const requestSchemas = collectSchemas(
        request.schema,
        [operationId, 'request'],
        new SchemasAccumulator(knownSchemas)
      );

      return {
        summary: operation.getSummary(),
        operationId,
        description: operation.getDescription(),
        path: operation.path,
        method: operation.method,
        deprecated: operation.isDeprecated(),
        requestExample,
        requestSchemas: requestSchemas.collectedSchemas,
        responseExample,
        responseSchemas: responseSchemas.collectedSchemas.sort(schemaComparer.compare),
      };
    })
    .sort(operationsSort);
  return { resourceName: tagName, operations: templateOperations };
}

const sortPriority = {
  getAll: 1,
  get: 2,
  add: 3,
  fallback: 4,
};

/**
 * @param {OperationTemplateData} operation
 * @returns {number}
 */
function getOperationPriority(operation) {
  const opType = operation.operationId.split('_')[1];
  let priority = sortPriority[opType];
  if (!priority && opType.startsWith('get')) {
    priority = sortPriority.get;
  }
  return priority || sortPriority.fallback;
}

/**
 * @param {OperationTemplateData} a
 * @param {OperationTemplateData} b
 * @returns {number}
 */
function operationsSort(a, b) {
  return getOperationPriority(a) - getOperationPriority(b);
}

const schemaSortOrder = {
  orderitemresult: 50,
  orderitem: 60,
  orderitemdata: 90,
  orderitemrebatedata: 91,
  orderitemproductdata: 92,
  orderitemoptions: 93,
  accountingstate: 94,
  orderitemtype: 95,
  revenuetype: 96,
  orderitemdatadiscriminator: 97,
  default: 100
}
