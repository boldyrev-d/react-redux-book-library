import { Record, Map } from 'immutable';
import { books as booksMock } from '../mock';
import { arrayToMap } from '../store/helpers';

const BookModel = Record({
  id: null,
  title: '',
  year: null,
  author: '',
  pages: null,
});

const defaultState = new Map({
  entities: arrayToMap(booksMock, book => new BookModel(book)),
  isEdit: false,
  editId: '',
});

export default (books = defaultState, action) => {
  const { type, payload, generatedId } = action;

  switch (type) {
    case 'DELETE_BOOK':
      return books.deleteIn(['entities', payload.id]);

    case 'ADD_BOOK':
      return books.setIn(
        ['entities', generatedId],
        new BookModel({ ...payload.book, id: generatedId }),
      );

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
