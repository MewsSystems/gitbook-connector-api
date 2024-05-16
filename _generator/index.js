#!/usr/bin/env node

import OASNormalize from "oas-normalize";
import Oas from "oas";
import { renderPage } from "./page.js";
import { tagToPageName } from "./naming.js";
import { loadConfig } from "./config.js";

/**
 * @typedef { import("oas/operation").Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 * @typedef { import('openapi-types').OpenAPIV3.ResponseObject } ResponseObject
 * @typedef { import('openapi-types').OpenAPIV3.Document } OASDocument
 * @typedef { import('oas').default } Oas
 */

const config = loadConfig();

const oas = new OASNormalize(config.oasPath, { enablePaths: true });
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
      const tag = operation.getTags()[0]?.name || "Unknown";
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
  Object.entries(getOperationsByTags(oasWrapper, config.tags)).map(
    ([tag, operations]) => {
      console.info(`Rendering ${tag}...`);
      return renderPage(tag, operations, config.outputPath);
    }
  )
);
