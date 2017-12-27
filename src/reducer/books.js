import { books as booksMock } from '../mock';
import { arrayToMap } from '../store/helpers';

const defaultState = {
  entities: arrayToMap(booksMock),
  isEdit: false,
  editId: '',
};

export default (books = defaultState, action) => {
  const { type, payload } = action;

  window.books = books;

  switch (type) {
    case 'EDIT_BOOK':
      return {
        ...books,
        isEdit: true,
        editId: payload.id,
      };

    default:
      return books;
  }
};
