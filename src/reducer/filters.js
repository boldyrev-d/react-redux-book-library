import { Map } from 'immutable';
import { CHANGE_SELECTION, DELETE_BOOK, CHANGE_SORT } from '../constants';

const defaultFilters = new Map({
  selected: [],
  sortBy: 'title',
});

export default (filters = defaultFilters, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_SELECTION:
      return filters.set('selected', payload.selected);

    case CHANGE_SORT:
      return filters.set('sortBy', payload.sortBy);

    case DELETE_BOOK:
      return filters.set('selected', []);

    default:
      return filters;
  }
};
