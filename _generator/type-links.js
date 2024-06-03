import { getSchemaAnchor, getSchemaId, loadYaml, saveYaml } from './utils.js';

/**
 * @typedef { import('oas/operation').Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 * @typedef { import('openapi-types').OpenAPIV3.ResponseObject } ResponseObject
 * @typedef { import('openapi-types').OpenAPIV3.Document } OASDocument
 * @typedef { import('oas').default } Oas
 * @typedef { import('./types.js').PageContext } PageContext
 * @typedef { import('./types.js').TypeLink } TypeLink
 * @typedef { import('./types.js').TemplateEnumEntry } TemplateEnumEntry
 */

/**
 * @type {Map<string, TypeLink>}
 */
const KNOWN_TYPES = new Map();

const CONFIG_FILE = 'types.yaml';

/**
 * @param {SchemaObject} schema
 * @returns {TypeLink}
 */
function schemaToTypeLink(schema, pageContext) {
  const id = getSchemaId(schema);
  const title = schema.title || schema['x-readme-ref-name'];
  const anchor = getSchemaAnchor(schema);
  return {
    id,
    title,
    file: pageContext.fileName,
    anchor,
  };
}

export class SchemasAccumulator {
  /**
   * @type {Map<string, SchemaObject>}
   */
  #knownSchemas;

  /**
   * @type {PageContext}
   */
  #pageContext;

  collectedSchemas = [];

  constructor(knownSchemas, pageContext) {
    this.#knownSchemas = knownSchemas;
    this.#pageContext = pageContext;
  }

  add(schemaId, rawSchema, templateSchema) {
    const schemaFile = this.#getSchemaFile(schemaId);
    if (schemaFile && schemaFile !== this.#pageContext.fileName) {
      return;
    }
    this.#knownSchemas.set(
      schemaId,
      schemaToTypeLink(rawSchema, this.#pageContext)
    );
    this.collectedSchemas.push(templateSchema);
  }

  #getSchemaFile(schemaId) {
    return this.#knownSchemas.get(schemaId)?.file;
  }
}

export function resolvePropertyType(schemaId) {
  if (!schemaId) {
    return null;
  }

  const schema = KNOWN_TYPES.get(schemaId);
  if (!schema) {
    return null;
  }

  return `[${schema.title || schema.name}](${schema.file}#${schema.anchor})`;
}

export function getPageResolver(pageContext) {
  return {
    createSchemasAccumulator() {
      return new SchemasAccumulator(KNOWN_TYPES, pageContext);
    },
  };
}

export function loadKnownTypes() {
  const types = loadConfig();
  KNOWN_TYPES.clear();
  for (typeLink of types) {
    KNOWN_TYPES.set(typeLink.id, typeLink);
  }
}

export function saveKnownTypes() {
  return dumpConfig(KNOWN_TYPES);
}

/**
 * @param {string} configFile
 * @returns {TypeLink[]}
 */
function loadConfig(configFile = CONFIG_FILE) {
  try {
    const contents = loadYaml(configFile);
    if (!contents || !contents.types) {
      return [];
    }
    Object.entries(contents.types).map(([id, value]) => ({
      id,
      title: value.title,
      file: value.file,
      anchor: value.anchor,
    }));
  } catch (e) {
    console.error(
      `Failed to load known types from ${configFile}: ${e.message}`
    );
  }
  return [];
}

/**
 * @param {Map<string, TypeLink>} knownTypes
 * @param {string} configFile
 */
function dumpConfig(knownTypes, configFile = CONFIG_FILE) {
  const types = {};
  for (const [key, value] of knownTypes.entries()) {
    types[key] = {
      title: value.title,
      file: value.file,
      anchor: value.anchor,
    };
  }
  return saveYaml(configFile, { types });
}
