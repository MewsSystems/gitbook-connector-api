import {
  isEnum,
  isExcludedSchema,
  propertyContract,
  propertyDescription,
  propertyType,
} from './jsonschema.js';
import { Comparer } from './utils.js';

/**
 * @typedef { import('oas/operation').Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 * @typedef { import('openapi-types').OpenAPIV3.ResponseObject } ResponseObject
 * @typedef { import('openapi-types').OpenAPIV3.Document } OASDocument
 * @typedef { import('oas').default } Oas
 * @typedef { import('./types.js').TemplateSchema } TemplateSchema
 * @typedef { import('./types.js').TemplateProperty } TemplateProperty
 * @typedef { import('./types.js').TemplateEnumEntry } TemplateEnumEntry
 */

export class SchemasAccumulator {
  constructor(knownSchemas = new Map()) {
    this.knownSchemas = knownSchemas;
    this.collectedSchemas = [];
  }

  add(schemaId, schema) {
    if (this.knownSchemas.has(schemaId)) {
      return;
    }
    this.knownSchemas.set(schemaId, schema);
    this.collectedSchemas.push(schema);
  }

  get(schemaId) {
    return this.knownSchemas.get(schemaId);
  }

  has(schemaId) {
    return this.knownSchemas.has(schemaId);
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
  const propertyComparer = new Comparer(propertySortOrder, function(propertySchema) { return propertySchema.name.toLowerCase(); })

  const properties =
    schema.properties &&
    Object.entries(schema.properties).map(([name, property]) =>
      createTemplateProperty(name, property)
    ).sort(propertyComparer.compare);
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

  if (isExcludedSchema(schema)) {
    return accumulator;
  }

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
  const composedSchemas = schema.anyOf || schema.oneOf || schema.allOf || [];
  for (const item of composedSchemas) {
    collectSchemas(item, nestedPath, accumulator);
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

const propertySortOrder = {
  clienttoken: -99,
  accesstoken: -98,
  client: -97,
  serviceid: 50,
  serviceorderid: 51,
  billid: 52,
  accountingcategoryid: 53,
  unitcount: 54,
  unitamount: 55,
  amount: 56,
  originalamount: 57,
  notes: 58,
  revenuetype: 59,
  creatorprofileid: 60,
  updaterprofileid: 61,
  consumedutc: 62,
  closedutc: 63,
  chargedutc: 64,
  createdutc: 65,
  updatedutc: 66,
  startutc: 67,
  accountingstate: 68,
  type: 69,
  options: 70,
  data: 71,  
  currency: 98,
  limitation: 99,
  default: 0
};
