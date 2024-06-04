import { Edge, edgeGlobals } from 'edge.js';
import { tagToPageName } from './utils.js';
import path from 'node:path';
import fs from 'node:fs/promises';

import { propertyContract, propertyType } from './jsonschema.js';
import { collectSchemas } from './schema.js';
import { getPageResolver } from './types-resolver.js';
import { compareSchemas } from './sorting/schemaSort.js';
import { compareOperations } from './sorting/operationSort.js';

/**
 * @typedef { import('oas/operation').Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 * @typedef { import('openapi-types').OpenAPIV3.ResponseObject } ResponseObject
 * @typedef { import('openapi-types').OpenAPIV3.Document } OASDocument
 * @typedef { import('oas').default } Oas
 * @typedef { import('./types.js').PageContext } PageContext
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
    let jsonString = JSON.stringify(obj, null, 2);
    jsonString = replaceWhitespaceInIntegerArrays(jsonString);
    return edgeGlobals.html.safe(jsonString);
  },
  propertyContract,
  propertyType,
});

function replaceWhitespaceInIntegerArrays(jsonString) {
  return jsonString.replace(
    /\[\s*(?:-?\d+\s*,\s*)*-?\d+\s*\]/g,
    (match) => {
      return match.replace(/\s+/g, ' ');
    }
  );
}

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
  const outputFileName = `${tagToPageName(tagName)}.md`;
  const outputFilePath = path.join(outputPath, outputFileName);

  const pageContext = {
    tagName,
    fileName: outputFileName,
    outputPath,
  };
  const templateData = prepareTemplateData(tagName, operations, pageContext);
  const md = await edge.render('resource', templateData);
  const mdAdjusted = absoluteMdLinksToRelative(
    md
      .trim()
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n') + '\n',
    outputFileName
  );

  return fs.writeFile(outputFilePath, mdAdjusted, 'utf-8');
}

// https://davidwells.io/snippets/regex-match-markdown-links
const regexMdLinks = /\[([^\[]+)\]\(([^\)]+)\)/gm;

/**
 * @param {string} markdown
 * @param {string} fileName
 * @returns {string}
 */
function absoluteMdLinksToRelative(markdown, fileName) {
  const basePath = `/connector-api/operations/`;
  const currentFile = `${basePath}/${fileName}`;

  return markdown.replace(regexMdLinks, (fullMatch, linkText, linkHref) => {
    if (
      !linkHref.startsWith('https://mews-systems.gitbook.io/connector-api/')
    ) {
      return fullMatch;
    }
    const url = new URL(linkHref);
    let targetPath;
    if (url.pathname.endsWith('/operations/')) {
      targetPath = currentFile;
    } else {
      targetPath = url.pathname.replace(/\/?$/, '.md');
    }

    const relativePath = path.posix.relative(basePath, targetPath);

    return `[${linkText}](${relativePath}${url.hash})`;
  });
}

/**
 * @param {string} tagName
 * @param {Operation[]} oasOperations
 * @param {PageContext} pageContext
 * @returns {{ resourceName: string, operations: OperationTemplateData[] }}
 */
function prepareTemplateData(tagName, oasOperations, pageContext) {
  const resolver = getPageResolver(pageContext);
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
        resolver.createSchemasAccumulator()
      );

      const request = operation.getRequestBody('application/json');
      const requestExample = request.example || {};
      const requestSchemas = collectSchemas(
        request.schema,
        [operationId, 'request'],
        resolver.createSchemasAccumulator()
      );

      return {
        summary: operation.getSummary(),
        operationId,
        description: operation.getDescription(),
        path: operation.path,
        method: operation.method,
        deprecated: operation.isDeprecated(),
        restricted: operation.schema['x-restricted'],
        requestExample,
        requestSchemas: requestSchemas.collectedSchemas,
        responseExample,
        responseSchemas: responseSchemas.collectedSchemas.sort(compareSchemas),
      };
    })
    .sort(compareOperations);
  return { resourceName: tagName, operations: templateOperations };
}
