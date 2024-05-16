#!/usr/bin/env node

import { parseArgs } from 'node:util';
import OASNormalize from 'oas-normalize';
import Oas from 'oas';
import { renderPage } from './page.js';
import { tagToPageName } from './naming.js';

/**
 * @typedef { import("oas/operation").Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 * @typedef { import('openapi-types').OpenAPIV3.ResponseObject } ResponseObject
 * @typedef { import('openapi-types').OpenAPIV3.Document } OASDocument
 * @typedef { import('oas').default } Oas
 */

const parsedArgs = parseArgs({
  allowPositionals: true,
  options: {
    tags: {
      type: 'string',
      alias: 't',
      multiple: true,
      default: [],
    },
  },
});

const [oasPath, outputPath] = parsedArgs.positionals;
if (!oasPath && !outputPath) {
  console.error(
    'Usage: node generate.js <url-or-path-to-openapi> <output-folder> [--tags tag1 [--tags "some tag2"]]'
  );
  process.exit(1);
}

const oas = new OASNormalize(oasPath, { enablePaths: true });
/** @type {OASDocument} */
const definition = await oas.validate();
const oasWrapper = new Oas(definition);
await oasWrapper.dereference();

/**
 * @param {Oas} oas
 * @param {string[]} includedTags
 * @returns {Record<string, Operation[]>}
 */
function getOperationsByTags(oas, tagValues) {
  let onlyIncludedTags = false;
  let includedTags = new Set();
  if (tagValues?.length > 0) {
    onlyIncludedTags = true;
    includedTags = new Set(tagValues.map(tagToPageName));
  }

  const operationsPerTags = {};
  for (const methods of Object.values(oas.getPaths())) {
    for (const operation of Object.values(methods)) {
      const tag = operation.getTags()[0]?.name || 'Unknown';
      if (onlyIncludedTags && !includedTags.has(tagToPageName(tag))) {
        continue;
      }
      operationsPerTags[tag] ??= [];
      operationsPerTags[tag].push(operation);
    }
  }
  return operationsPerTags;
}

await Promise.all(
  Object.entries(getOperationsByTags(oasWrapper, parsedArgs.values.tags)).map(
    ([tag, operations]) => {
      console.info(`Rendering ${tag}...`);
      return renderPage(tag, operations, outputPath);
    }
  )
);

// console.log(getOperationsByTags(oas));
