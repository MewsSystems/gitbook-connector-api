const orderMap = {
  "service": 10,
  "serviceoptions": 10,
  "coproduct_servicedata": 11,
  "servicedatadiscriminator": 12,
  "servicetype": 13,
  "bookableservicedata": 14,
  "timeunit": 15,
  "figure1:illustrationofanightlyservice": 16,
  "figure2:illustrationofadaytimeservice": 17,
  "timeunitperiod": 18,
  "additionalservicedata": 19,
  "promotions": 20,
  "serviceavailabilitymetrics": 21,
  "resourcecategoryavailability(ver2024-01-22)": 22,
  "resourcecategoryavailability": 23,
  "availabilityupdate": 24,
  default: 0
};

export function compareSchemas(a, b) {
  return getKeyOrder(a) - getKeyOrder(b);
}

function getSortKey(schema) {
  return schema.id.toLowerCase()
    .replace('x-ref-name-', '')
    .replace('enum', '');
}

function getKeyOrder(obj) {
  const sortValue = getSortKey(obj);
  let order = orderMap[sortValue];
  return order || orderMap.default;
}