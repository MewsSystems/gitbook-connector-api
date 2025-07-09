import { getSchemaId, hasProperties, log } from './utils.js';
import { pickComposedSchema } from './jsonschema.js';
import { collectSchemas } from './collect-schemas.js';

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
 * Traverse JSON schema, collect all nested schemas
 * @param {SchemaObject} jsonSchema
 * @param {string[]} path
 * @param {SchemasAccumulator} accumulator
 * @returns {SchemasAccumulator}
 **/
export function collectJsonSchema(jsonSchema, path, accumulator) {
  const nestedPath = [...path];
  jsonSchema['x-schema-paths'] ??= [];
  jsonSchema['x-schema-paths'].push(path);

  if (jsonSchema.oneOf?.length > 1) {
    jsonSchema['x-oneOfRoot'] = true;
    const surrogateSchemaId = path.join('-');
    accumulator.add(surrogateSchemaId, jsonSchema);
  }
  const composedSchemas =
    jsonSchema.anyOf || jsonSchema.oneOf || jsonSchema.allOf;
  for (const item of composedSchemas) {
    collectSchemas(item, nestedPath, accumulator);
  }
  return accumulator;
}

function adjustOneOfRootSchema(schema) {
  schema.description =
    'The following schemas are mutually exclusive. Only one of them can be used at a time.';
}
