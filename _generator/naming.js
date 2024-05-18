/**
 * @param {string} tagName
 * @returns {string}
 */
export function tagToPageName(tagName) {
  return tagName.toLowerCase().replace(/[^a-z0-9]/g, '');
}
