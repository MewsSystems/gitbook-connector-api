import fs from 'node:fs';
import YAML from 'yaml';

export function loadYaml(path) {
  return YAML.parse(fs.readFileSync(path, 'utf8'));
}

export function saveYaml(path, data) {
  fs.writeFileSync(path, YAML.stringify(data));
}

/**
 * @param {string} tagName
 * @returns {string}
 */
export function tagToPageName(tagName) {
  return tagName.toLowerCase().replace(/[^a-z0-9]/g, '');
}
export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');
}
export function firstLine(str = '') {
  return str.split(/\r\n|\r|\n/)[0];
}
export function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

/**
 * @param {SchemaObject} schema
 * @returns {string}
 */
export function getSchemaAnchor(schema) {
  const title = schema.title;
  if (title) {
    return slugify(title);
  }

  return getSchemaId(schema) || '';
}

/**
 * @param {SchemaObject} schema
 * @returns {string | null}
 */
export function getSchemaId(schema) {
  const schemaId = schema['x-schema-id'] || schema['x-readme-ref-name'];
  if (schemaId) {
    return schemaId.toLowerCase();
  }
  return null;
}

/**
 * @param {SchemaObject} schema
 * @returns {string}
 */
export function getSchemaTitle(schema) {
  return (
    schema.title ||
    schema.name ||
    schema['x-schema-id'] ||
    schema['x-readme-ref-name']
  );
}
