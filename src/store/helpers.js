export function arrayToMap(arr) {
  return arr.reduce((acc, entity) => ({ ...acc, [entity.id]: entity }), {});
}
