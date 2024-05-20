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
