const sortPriority = {
  getAll: 1,
  get: 2,
  add: 3,
  fallback: 4,
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
  return priority || sortPriority.fallback;
}