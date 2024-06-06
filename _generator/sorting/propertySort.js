const orderMap = {
  clienttoken: -99,
  accesstoken: -98,
  client: -97,
  // id: -9,
  // enterpriseid: -8,
  // createdutc: -7,
  // updatedutc: -6,
  limitation: 99,
  default: 0,
};

export function compareProperties(a, b) {
  // put deprecated in the end
  if (a.deprecated != b.deprecated) {
    return a.deprecated ? 1 : -1;
  }

  return getKeyOrder(a) - getKeyOrder(b);
}

function getSortKey(propertySchema) {
  return propertySchema.name.toLowerCase();
}

function getKeyOrder(obj) {
  const sortValue = getSortKey(obj);
  let order = orderMap[sortValue];
  return order || orderMap.default;
}
