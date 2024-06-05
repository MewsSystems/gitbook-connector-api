import {
  getSchemaAnchor,
  getSchemaId,
  getSchemaTitle,
  loadYaml,
  saveYaml,
} from './utils.js';

/**
 * @typedef { import('oas/operation').Operation } Operation
 * @typedef { import('openapi-types').OpenAPIV3.SchemaObject } SchemaObject
 * @typedef { import('openapi-types').OpenAPIV3.ReferenceObject } ReferenceObject
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
const DISCOVERED_TYPES = new Map();
const ALL_SCHEMAS = new Map();

const CONFIG_FILE = 'types.yaml';

/**
 * @param {SchemaObject} schema
 * @returns {TypeLink}
 */
function schemaToTypeLink(schema, pageContext) {
  const id = getSchemaId(schema);
  const anchor = getSchemaAnchor(schema);
  return {
    id,
    file: pageContext.fileName,
    anchor,
  };
}

export class SchemasAccumulator {
  /**
   * @type {Map<string, TypeLink>}
   */
  #discoveredTypes;

  /**
   * @type {PageContext}
   */
  #pageContext;

  /**
   * @type {Set<string>}
   */
  #knownPageSchemas;

  #sectionSchemas = new Map();

  constructor(discoveredTypes, pageContext, knownPageSchemas) {
    this.#discoveredTypes = discoveredTypes;
    this.#pageContext = pageContext;
    this.#knownPageSchemas = knownPageSchemas;
  }

  add(schemaId, rawSchema, templateSchema) {
    if (!this.#shouldAddSchema(schemaId)) {
      return;
    }

    this.#discoveredTypes.set(
      schemaId,
      schemaToTypeLink(rawSchema, this.#pageContext)
    );
    this.#knownPageSchemas.add(schemaId);
    this.#sectionSchemas.set(schemaId, templateSchema);
  }

  #shouldAddSchema(schemaId) {
    // Root schema is typically request / response and must be included
    if (this.#sectionSchemas.size === 0) {
      return true;
    }
    const schemaFile = this.#getSchemaFile(schemaId);
    if (schemaFile && schemaFile !== this.#pageContext.fileName) {
      return false;
    }
    if (
      this.#knownPageSchemas.has(schemaId) ||
      this.#sectionSchemas.has(schemaId)
    ) {
      return false;
    }
    return true;
  }

  #getSchemaFile(schemaId) {
    return this.#discoveredTypes.get(schemaId)?.file;
  }

  getCollectedSchemas() {
    return this.#sectionSchemas.values();
  }
}

export function getPageResolver(pageContext) {
  const knownPageSchemas = new Set();
  return {
    createSectionSchemasAccumulator() {
      return new SchemasAccumulator(
        DISCOVERED_TYPES,
        pageContext,
        knownPageSchemas
      );
    },
  };
}

export function resolvePropertyType(schemaId) {
  if (!schemaId) {
    return null;
  }

  const typeLink = DISCOVERED_TYPES.get(schemaId);
  if (!typeLink) {
    return null;
  }
  const schema = ALL_SCHEMAS.get(schemaId);
  const title = typeLink.titleOverride || getSchemaTitle(schema);

  return `[${title}](${typeLink.file}#${typeLink.anchor})`;
}

/**
 * @param {Record<string, ReferenceObject | SchemaObject>} allSchemas
 */
export function loadDiscoveredTypes(allSchemas) {
  DISCOVERED_TYPES.clear();
  const types = loadConfig();
  for (const typeLink of types) {
    DISCOVERED_TYPES.set(typeLink.id, typeLink);
  }

  ALL_SCHEMAS.clear();
  for (const schema of Object.values(allSchemas)) {
    const schemaId = getSchemaId(schema);
    ALL_SCHEMAS.set(schemaId, schema);
  }
}

export function saveDiscoveredTypes() {
  return dumpConfig(DISCOVERED_TYPES);
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
    return Object.entries(contents.types).map(([id, value]) => ({
      ...value,
      id,
    }));
  } catch (e) {
    console.error(
      `Failed to load discovered types from ${configFile}: ${e.message}`
    );
  }
  return [];
}

/**
 * @param {Map<string, TypeLink>} discoveredTypes
 * @param {string} configFile
 */
function dumpConfig(discoveredTypes, configFile = CONFIG_FILE) {
  const types = {};
  for (const [key, value] of discoveredTypes.entries()) {
    types[key] = {
      ...value,
      id: undefined,
    };
  }
  return saveYaml(configFile, { types });
}
