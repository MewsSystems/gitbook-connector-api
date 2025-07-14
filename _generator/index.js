#!/usr/bin/env node

import OASNormalize from 'oas-normalize';
import Oas from 'oas';
import { renderPage } from './page.js';
import { tagToPageName } from './utils.js';
import { loadConfig } from './config.js';
import { loadDiscoveredTypes, saveDiscoveredTypes } from './types-resolver.js';

/**
 * @typedef { import("oas/operation").Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 * @typedef { import('openapi-types').OpenAPIV3.ResponseObject } ResponseObject
 * @typedef { import('openapi-types').OpenAPIV3.Document } OASDocument
 * @typedef { import('oas').default } Oas
 */

const config = loadConfig();

const oasNormalizer = new OASNormalize(config.oasPath, { enablePaths: true });
await oasNormalizer.validate();
const oasDefinition = await oasNormalizer.convert();
const oasWrapper = new Oas(oasDefinition);
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
loadDiscoveredTypes(oasWrapper.api.components?.schemas);
await Promise.all(
  Object.entries(getOperationsByTags(oasWrapper, config.tags)).map(
    ([tag, operations]) => {
      console.info(`Rendering ${tag}...`);
      return renderPage(tag, operations, config.outputPath);
    }
  )
);
saveDiscoveredTypes();
