import { Map } from 'immutable';

export function arrayToMap(arr, mapper = f => f) {
  return arr.reduce((acc, entity) => acc.set(entity.id, mapper(entity)), new Map({}));
}
