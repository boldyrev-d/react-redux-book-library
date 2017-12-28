import { CHANGE_SELECTION, CHANGE_SORT } from '../constants';

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected },
  };
}

export function changeSort(sortBy) {
  return {
    type: CHANGE_SORT,
    payload: { sortBy },
  };
}
