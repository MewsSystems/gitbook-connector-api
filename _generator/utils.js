import fs from 'node:fs';
import YAML from 'yaml';

export function loadYaml(path) {
  return YAML.parse(fs.readFileSync(path, 'utf8'));
}
/**
 * @param {string} tagName
 * @returns {string}
 */
export function tagToPageName(tagName) {
  return tagName.toLowerCase().replace(/[^a-z0-9]/g, '');
}
export function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '-');
}
export function firstLine(str = '') {
  return str.split(/\r\n|\r|\n/)[0];
}
export function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}
