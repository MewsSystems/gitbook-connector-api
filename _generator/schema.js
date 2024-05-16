import {
  excludedSchemaIds,
  isNestedSchema,
  getSchemaAnchor,
  propertyContract,
  propertyType,
} from './jsonschema.js';

/**
 * @typedef { import('oas/operation').Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 * @typedef { import('openapi-types').OpenAPIV3.ResponseObject } ResponseObject
 * @typedef { import('openapi-types').OpenAPIV3.Document } OASDocument
 * @typedef { import('oas').default } Oas
 * @typedef { import('./types.js').TemplateSchema } TemplateSchema
 */

class SchemasAccumulator {
  constructor() {
    this.map = new Map();
    this.collectedSchemas = [];
  }

  add(schemaId, schema) {
    this.map.set(schemaId, schema);
    this.collectedSchemas.push(schema);
  }

  get(schemaId) {
    return this.map.get(schemaId);
  }

  has(schemaId) {
    return this.map.has(schemaId);
  }
}

/**
 * @param {string} name
 * @param {SchemaObject} property
 * @returns {TemplateProperty}
 */
function createTemplateProperty(name, property) {
  return {
    name: name,
    description: property.description?.trim() ?? '',
    type: propertyType(property),
    contract: propertyContract(property),
    deprecated: property.deprecated ?? false,
  };
}

/**
 * @param {SchemaObject} schema
 * @returns {TemplateSchema}
 */
function createTemplateSchema(schema, schemaId, path) {
  console.log('createTemplateSchema', schemaId, schema);
  const properties =
    schema.properties &&
    Object.entries(schema.properties).map(([name, property]) =>
      createTemplateProperty(name, property)
    );
  return {
    path: [...path],
    id: schemaId,
    title: schema.title || schema['x-readme-ref-name'],
    description: schema.description?.trim() ?? '',
    enum: schema.enum,
    deprecated: schema.deprecated ?? false,
    properties,
  };
}

// Traverse schema, collect all nested schemas
/**
 * @param {SchemaObject} schema
 * @param {string[]} path
 * @param {SchemasAccumulator} accumulator
 * @returns {SchemasAccumulator}
 */
export function collectSchemas(
  schema,
  path,
  accumulator = new SchemasAccumulator()
) {
  const schemaId = getSchemaId(schema);
  const nestedPath = [...path];

  if (schemaId) {
    accumulator.add(schemaId, createTemplateSchema(schema, schemaId, path));
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
  if (schema.anyOf) {
    for (const item of schema.anyOf) {
      collectSchemas(item, nestedPath, accumulator);
    }
  }
  return accumulator;
}

/**
 * @param {SchemaObject} schema
 * @returns {string | null}
 */
export function getSchemaId(schema) {
  const schemaId = schema['x-schema-id'];
  if (schemaId) {
    return schemaId.toLowerCase();
  }
  const refName = schema['x-readme-ref-name'];
  if (refName) {
    return `X-Ref-Name-${refName}`;
  }
  return null;
}
