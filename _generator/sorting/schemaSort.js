const orderMap = {
  default: 0,
};

export function compareSchemas(a, b) {
  return getKeyOrder(a) - getKeyOrder(b);
}

function getSortKey(schema) {
  return schema.id.toLowerCase().replace('x-ref-name-', '').replace('enum', '');
}

function getKeyOrder(obj) {
  const sortValue = getSortKey(obj);
  let order = orderMap[sortValue];
  return order || orderMap.default;
}
