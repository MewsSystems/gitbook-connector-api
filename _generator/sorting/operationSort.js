const sortPriority = {
  getAll: 1,
  get: 2,
  add: 3,
  update: 4,
  addFile: 5,
  fallback: 6,
};

/**
 * @param {OperationTemplateData} a
 * @param {OperationTemplateData} b
 * @returns {number}
 */
export function compareOperations(a, b) {
  let opComp = getOperationPriority(a) - getOperationPriority(b);

  if (opComp != 0) {
    return opComp;
  }

  // sorts operations in the following order:
  // path_2024-01-01
  // path_2023-01-01
  // path
  return -getOperationPath(a).localeCompare(getOperationPath(b), undefined);
}

function getSortKey(operation) {
  return operation.operationId.split('_')[1];
}

function getOperationPath(operation) {
  return operation.operationId.split('_').slice(1).join('_');
}

/**
 * @param {OperationTemplateData} operation
 * @returns {number}
 */
function getOperationPriority(operation) {
  const sortKey = getSortKey(operation);
  let priority = sortPriority[sortKey];
  if (!priority && sortKey.startsWith('get')) {
    priority = sortPriority.get;
  }
  if (!priority && sortKey.startsWith('add')) {
    priority = sortPriority.add + 0.5;
  }
  return priority || sortPriority.fallback;
}
