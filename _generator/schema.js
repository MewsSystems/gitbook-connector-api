import {
  isEnum,
  isExcludedSchema,
  propertyContract,
  propertyDescription,
  propertyType,
} from './jsonschema.js';
import { getSchemaId } from './utils.js';
import { compareProperties } from './sorting/propertySort.js';
import { capitalize } from './utils.js';

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
 * @param {string} name
 * @param {SchemaObject} property
 * @returns {TemplateProperty}
 */
function createTemplateProperty(name, property) {
  return {
    name: capitalize(name),
    description: propertyDescription(name, property),
    type: propertyType(property),
    contract: propertyContract(property),
    deprecated: property.deprecated ?? false,
  };
}

/**
 * Handles enums for display. Currently we have a Swashbuckle extension which passess enum descriptions to extension properties (which is good),
 * but also appends list of enums to schema description (which is bad). So we're picking up just the first line of description.
 * @param {SchemaObject} schema
 * @returns {{ description: string, enum: TemplateEnumEntry[] }}
 */
function createEnumTemplateSchema(schema) {
  const entries = [];
  for (let i = 0; i < schema.enum.length; i++) {
    const value = schema.enum[i];
    const description = schema['x-enumDescriptions']?.[i];
    const name = schema['x-enumNames']?.[i];
    const entry = {
      value,
      description,
      name: name === value ? undefined : name,
    };
    entries.push(entry);
  }
  return {
    enum: entries,
    description: '', // blank out description since it'd be the same as in property tables
  };
}

/**
 * @param {SchemaObject} schema
 * @returns {TemplateSchema}
 */
function createTemplateSchema(schema, schemaId, path) {
  const properties =
    schema.properties &&
    Object.entries(schema.properties)
      .map(([name, property]) => createTemplateProperty(name, property))
      .sort(compareProperties);
  let baseObject = {};
  if (isEnum(schema)) {
    baseObject = createEnumTemplateSchema(schema, schemaId, path);
  }
  return {
    path: [...path],
    id: schemaId,
    title: schema.title || schema['x-readme-ref-name'],
    description: schema.description?.trim() ?? '',
    enum: schema.enum,
    deprecated: schema.deprecated ?? false,
    properties,
    ...baseObject,
  };
}

/**
 * @param {TemplateSchema} templateSchema
 */
function fixupCoproductTemplateSchema(templateSchema) {
  let discriminator = templateSchema.properties.find(
    (p) => p.name.toLowerCase() === 'discriminator'
  );
  if (discriminator) {
    discriminator.description = 'Determines type of value.';
  }

  let value = templateSchema.properties.find(
    (p) => p.name.toLowerCase() === 'value'
  );
  if (value) {
    value.type = 'object';
    value.description = 'Structure of object depends on `Discriminator`.';
  }
}

// Traverse schema, collect all nested schemas
/**
 * @param {SchemaObject} schema
 * @param {string[]} path
 * @param {SchemasAccumulator} accumulator
 * @returns {SchemasAccumulator}
 */
export function collectSchemas(schema, path, accumulator) {
  const schemaId = getSchemaId(schema);
  const nestedPath = [...path];

  if (isExcludedSchema(schema)) {
    return accumulator;
  }
  if (schemaId) {
    const templateSchema = createTemplateSchema(schema, schemaId, path);
    accumulator.add(schemaId, schema, templateSchema);
    nestedPath.push(schemaId);

    if (schemaId?.startsWith('coproduct')) {
      fixupCoproductTemplateSchema(templateSchema);
    }
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
