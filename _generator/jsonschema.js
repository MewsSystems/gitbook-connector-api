/**
 * @typedef { import('oas/operation').Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 */

const schemaTypeOverides = {
  Limitation: '[Limitation](../guidelines/pagination.md#limitation)',
  TimeFilterInterval: '[Time interval](_objects.md#time-interval)',
};

export const excludedSchemaIds = new Set([
  'StringUpdateValue',
  'BooleanUpdateValue',
  'GuidUpdateValue',
  'GuidNullableUpdateValue',
]);

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
    const schemaId = schema['x-schema-id'];
    if (schemaId && !(schemaId in schemaTypeOverides)) {
      return true;
    }
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
function isEnum(schema) {
  return schema.type === 'string' && schema.enum?.length > 0;
}

/**
 * @param {SchemaObject} schema
 * @returns {string}
 */
export function getSchemaAnchor(schema) {
  const schemaId = schema['x-schema-id'];
  if (schemaId) {
    return schemaId.toLowerCase();
  }
  const refName = schema['x-readme-ref-name'];
  if (refName) {
    return `X-Ref-Name-${refName}`;
  }
  return '';
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
  if (isEnum(schema)) {
    const title = schema.title || schema['x-readme-ref-name'];
    const anchor = getSchemaAnchor(schema);

    return `[${title}](#${anchor})`;
  }
  if (schema.type === 'array') {
    const nestedSchemaId = schema.items['x-schema-id'];
    let nestedType = schemaTypeOverides[nestedSchemaId];
    if (!nestedType && nestedSchemaId) {
      const nestedTitle = schema.items.title || nestedSchemaId;
      nestedType = `[${nestedTitle}](#${getSchemaAnchor(schema.items)})`;
    } else {
      nestedType = propertyType(schema.items);
    }
    return `array of ${nestedType}`;
  }
  if (schema.type === 'object') {
    const schemaId = schema['x-schema-id'];
    if (schemaTypeOverides[schemaId]) {
      return schemaTypeOverides[schemaId];
    }
    return 'object';
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
    result.push(`max ${schema.maxItems} items`);
  }
  return result.join(', ');
}

// /**
//  * Objects which contain only `BooleanUpdateValue` properties are treated as enums.
//  * @param {SchemaObject} schema
//  */
// function getEnumProperties(schema) {
//   const allBoolean = schema.properties.every((property) => {
//     return (
//       property.type === 'boolean' ||
//       property['x-schema-id'] === 'BooleanUpdateValue'
//     );
//   });
//   if (!allBoolean) {
//     return [];
//   }
//   return Object.keys(schema.properties);
// }
