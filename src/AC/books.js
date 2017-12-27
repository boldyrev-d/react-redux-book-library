import { DELETE_BOOK, ADD_BOOK, EDIT_BOOK, SAVE_BOOK } from '../constants';

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    payload: { id },
  };
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: {
      book,
    },
    generateId: true,
  };
}

export function editBook(id) {
  return {
    type: EDIT_BOOK,
    payload: {
      id,
    },
  };
}

export function saveBook(id, book) {
  return {
    type: SAVE_BOOK,
    payload: {
      id,
      book,
    },
  };
}
