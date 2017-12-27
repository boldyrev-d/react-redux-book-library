import { DELETE_BOOK, ADD_BOOK, EDIT_BOOK, SAVE_BOOK, CLEAR_EDIT } from '../constants';

export function clearEdit() {
  return {
    type: CLEAR_EDIT,
  };
}

export function deleteBook(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_BOOK,
      payload: { id },
    });

    dispatch(clearEdit());
  };
}

export function addBook(book) {
  return (dispatch) => {
    dispatch({
      type: ADD_BOOK,
      payload: {
        book,
      },
      generateId: true,
    });

    dispatch(clearEdit());
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
  return (dispatch) => {
    dispatch({
      type: SAVE_BOOK,
      payload: {
        id,
        book,
      },
    });

    dispatch(clearEdit());
  };
}
