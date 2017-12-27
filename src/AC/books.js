export function deleteBook(id) {
  return {
    type: 'DELETE_BOOK',
    payload: { id },
  };
}

export function addBook(book) {
  return {
    type: 'ADD_BOOK',
    payload: {
      book,
    },
    generateId: true,
  };
}

export function editBook(id) {
  console.log('editid', id);

  return {
    type: 'EDIT_BOOK',
    payload: {
      id,
    },
  };
}

export function saveBook(id, book) {
  return {
    type: 'SAVE_BOOK',
    payload: {
      id,
      book,
    },
  };
}
