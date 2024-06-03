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

export class Comparer {
  constructor(orderMap, sortValueSelector) {
    this.orderMap = orderMap;
    this.sortValueSelector = sortValueSelector;
    this.compare = this.compare.bind(this)
  }

  getOrder(obj) {
    const sortValue = this.sortValueSelector(obj);
    let order = this.orderMap[sortValue];
    return order || this.orderMap.default;
  }

  compare(a, b) {
    return this.getOrder(a) - this.getOrder(b);
  }
}
