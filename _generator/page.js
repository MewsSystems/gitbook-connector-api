import { Edge, edgeGlobals } from 'edge.js';
import { tagToPageName } from './naming.js';
import path from 'node:path';
import fs from 'node:fs/promises';
import { EOL } from 'node:os';

import {
  excludedSchemaIds,
  getSchemaAnchor,
  isNestedSchema,
  propertyContract,
  propertyType,
} from './jsonschema.js';

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
  const coveredSchemas = new Set();
  const templateOperations = oasOperations
    .map((operation) => {
      const request = operation.getRequestBody('application/json');
      const requestExample = request.example || {};
      const requestSchemas = collectSchemas(
        request.schema,
        [],
        coveredSchemas,
        true
      );

      const response =
        operation.getResponseByStatusCode(200).content['application/json'];
      const responseExample = response.example || {};
      const responseSchemas = collectSchemas(
        response.schema,
        [],
        coveredSchemas,
        true
      );

      return {
        summary: operation.getSummary(),
        operationId: operation.getOperationId(),
        description: operation.getDescription(),
        path: operation.path,
        method: operation.method,
        deprecated: operation.isDeprecated(),
        requestExample,
        requestSchemas,
        responseExample,
        responseSchemas,
      };
    })
    .sort(operationsSort);
  return { resourceName: tagName, operations: templateOperations };
}

/**
 * @param {SchemaObject} schema
 * @returns {SchemaObject[]}
 */
function collectSchemas(
  schema,
  accumulator = [],
  coveredSchemas = new Set(),
  forceAddition = false
) {
  const schemaId = schema['x-schema-id'];
  if (
    excludedSchemaIds.has(schemaId) ||
    (!forceAddition && schemaId && coveredSchemas.has(schemaId)) ||
    !isNestedSchema(schema)
  ) {
    return accumulator;
  }
  const isEnum = schema.type === 'string' && schema.enum?.length > 0;
  if (isEnum) {
    const refName = schema['x-readme-ref-name'];
    const schemaIdSurrogate = schemaId || getSchemaAnchor(schema);
    schema['x-schema-id'] ??= schemaIdSurrogate;
    schema.title ??= refName;
    accumulator.push(schema);
    coveredSchemas.add(schemaIdSurrogate);
  }
  if (schema.properties?.discriminator) {
    schema.type = 'object'; // FIXME: CON-2034
    const refName = schema['x-readme-ref-name'];
    const schemaIdSurrogate = schemaId || getSchemaAnchor(schema);
    schema['x-schema-id'] ??= schemaIdSurrogate;
    schema.title ??= refName;
    accumulator.push(schema);
    coveredSchemas.add(schemaId);
  }
  if (schemaId) {
    accumulator.push(schema);
    coveredSchemas.add(schemaId);
  }
  if (schema.type === 'object') {
    for (const key in schema.properties) {
      collectSchemas(schema.properties[key], accumulator, coveredSchemas);
    }
  }
  if (schema.type === 'array') {
    collectSchemas(schema.items, accumulator, coveredSchemas);
  }
  if (schema.anyOf) {
    for (const item of schema.anyOf) {
      collectSchemas(item, accumulator, coveredSchemas);
    }
  }
  return accumulator;
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
