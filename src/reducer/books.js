import { Record, Map } from 'immutable';
import { books as booksMock } from '../mock';
import { arrayToMap } from '../store/helpers';
import { DELETE_BOOK, ADD_BOOK, EDIT_BOOK, SAVE_BOOK } from '../constants';

const BookModel = Record({
  id: null,
  title: '',
  year: '',
  author: '',
  pages: '',
});

const defaultState = new Map({
  entities: arrayToMap(booksMock, book => new BookModel(book)),
  isEdit: false,
  editId: null,
});

export default (books = defaultState, action) => {
  const { type, payload, generatedId } = action;

  switch (type) {
    case DELETE_BOOK:
      return books
        .deleteIn(['entities', payload.id])
        .set('isEdit', false)
        .set('editId', null);

    case ADD_BOOK:
      return books
        .setIn(['entities', generatedId], new BookModel({ ...payload.book, id: generatedId }))
        .set('isEdit', false)
        .set('editId', null);

    case EDIT_BOOK:
      return books.set('isEdit', true).set('editId', payload.id);

    case SAVE_BOOK:
      return books
        .updateIn(['entities', payload.id], () => new BookModel(payload.book))
        .set('isEdit', false)
        .set('editId', null);

    default:
      return books;
  }
};
