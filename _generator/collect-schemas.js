import { getSchemaId } from './utils.js';

/**
 * @typedef { import('oas/operation').Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 * @typedef { import('openapi-types').OpenAPIV3.ResponseObject } ResponseObject
 * @typedef { import('openapi-types').OpenAPIV3.Document } OASDocument
 * @typedef { import('oas').default } Oas
 * @typedef { import('./types.js').TemplateSchema } TemplateSchema
 * @typedef { import('./types.js').TemplateProperty } TemplateProperty
 * @typedef { import('./types.js').TemplateEnumEntry } TemplateEnumEntry
 * @typedef { import('./types-resolver.js').SchemasAccumulator } SchemasAccumulator
 */

/**
 * Traverse schema, collect all nested schemas
 * @param {SchemaObject} schema
 * @param {string[]} path
 * @param {SchemasAccumulator} accumulator
 * @returns {SchemasAccumulator}
 */
export function collectSchemas(schema, path, accumulator) {
  const schemaId = getSchemaId(schema);
  const nestedPath = [...path];
  schema['x-schema-paths'] ??= [];
  schema['x-schema-paths'].push(path);

  if (schemaId) {
    accumulator.add(schemaId, schema);
    nestedPath.push(schemaId);
  }

  if (schema.type === 'object' || schema.properties?.discriminator) {
    for (const key in schema.properties) {
      collectSchemas(schema.properties[key], [...nestedPath, key], accumulator);
    }
  }
  if (schema.type === 'array') {
    collectSchemas(schema.items, nestedPath, accumulator);
  }
  const composedSchemas = schema.anyOf || schema.oneOf || schema.allOf || [];
  for (const item of composedSchemas) {
    collectSchemas(item, nestedPath, accumulator);
  }
  return accumulator;
}
