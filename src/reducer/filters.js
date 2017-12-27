import { Map } from 'immutable';
import { CHANGE_SELECTION, DELETE_BOOK } from '../constants';

const defaultFilters = new Map({
  selected: [],
});

export default (filters = defaultFilters, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_SELECTION:
      return filters.set('selected', payload.selected);

    case DELETE_BOOK:
      return filters.set('selected', []);

    default:
      return filters;
  }
};
