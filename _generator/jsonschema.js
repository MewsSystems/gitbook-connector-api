/**
 * @typedef { import('oas/operation').Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 */

import { resolvePropertyType } from './types-resolver.js';
import { getSchemaId, getSchemaAnchor, firstLine } from './utils.js';

/**
 * @param {SchemaObject} schema
 * @returns boolean
 */
export function isNestedSchema(schema) {
  if (schema.anyOf || schema.oneOf || schema.allOf) {
    return true;
  }
  // FIXME: CON-2034 - Objects with discriminator aren't typed as objects
  if (schema?.properties?.discriminator) {
    return true;
  }
  if (schema.type === 'object') {
    return true;
  }
  if (schema.type === 'array') {
    return isNestedSchema(schema.items);
  }
  if (isEnum(schema)) {
    return true;
  }
  return false;
}

/**
 * @param {SchemaObject} schema
 * @returns boolean
 */
export function isEnum(schema) {
  const actualSchema = pickSingularComposedSchema(schema) || schema;
  return actualSchema.type === 'string' && actualSchema.enum?.length > 0;
}

function pickSingularComposedSchema(schema) {
  const composedSchema = schema.anyOf || schema.oneOf || schema.allOf;
  if (composedSchema?.length === 1) {
    return composedSchema[0];
  }
  return null;
}

/**
 * @description Generate human readable markdown description of schema type.
 * @param {SchemaObject} schema
 * @returns {string}
 */
export function propertyType(schema) {
  const singularSchema = pickSingularComposedSchema(schema);
  if (!schema.type && singularSchema) {
    schema = singularSchema;
  }
  const schemaId = getSchemaId(schema);
  const resolvedType = resolvePropertyType(schemaId);
  if (resolvedType) {
    return resolvedType;
  }
  // FIXME: this one can be probably removed?
  if (isEnum(schema)) {
    const title = schema.title || schema['x-readme-ref-name'];
    const anchor = getSchemaAnchor(schema);

    return `[${title}](#${anchor})`;
  }
  if (schema.type === 'array') {
    const nestedType = propertyType(schema.items);
    return `array of ${nestedType}`;
  }
  return schema.type;
}

/**
 * @param {SchemaObject} schema
 * @returns {string}
 */
export function propertyContract(schema) {
  let result = [];
  if (schema.anyOf?.length === 1) {
    schema = schema.anyOf[0];
  }

  if (schema.nullable) {
    result.push('optional');
  } else {
    result.push('required');
  }
  if (schema.maxItems) {
    const suffix = schema.maxItems > 1 ? 's' : '';
    result.push(`max ${schema.maxItems} item${suffix}`);
  }
  if (schema.maxLength) {
    result.push(`max length ${schema.maxLength} characters`);
  }
  if (schema['x-max-interval-in-months']) {
    const maxMonths = schema['x-max-interval-in-months'];
    const suffix = maxMonths > 1 ? 's' : '';
    result.push(`max length ${maxMonths} month${suffix}`);
  }
  return result.join(', ');
}

export function propertyDescription(propertyName, schema) {
  const { description = '' } = schema;
  if (isEnum(schema)) {
    // Enums without explicit description will have blank lines before autogenerated values
    if (description.startsWith('\n') && description.startsWith('\r')) {
      return '';
    }
    return firstLine(description);
  }
  return description.trim() || '';
}
