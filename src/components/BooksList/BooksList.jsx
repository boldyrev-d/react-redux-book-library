import React from 'react';
import { connect } from 'react-redux';
import { deleteBook, editBook } from '../../AC/books';

const BooksList = (props) => {
  const { books } = props;

  const booksList = (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <h2>{book.title}</h2>
          <div>Year: {book.year}</div>
          <div>author: {book.author}</div>
          <div>pages: {book.pages}</div>
          <button
            onClick={() => {
              // eslint-disable-next-line no-restricted-globals, no-alert
              if (confirm('Вы уверены?')) {
                props.deleteBook(book.id);
              }
            }}
          >
            DELETE
          </button>
          <button onClick={() => props.editBook(book.id)}>EDIT</button>
        </li>
      ))}
    </ul>
  );

  return <div>{booksList}</div>;
};

export default connect(
  (state) => {
    const { books, filters } = state;
    const selected = filters.get('selected');

    const booksArray = books
      .get('entities')
      .valueSeq()
      .toArray();
    // eslint-disable-next-line max-len
    const filteredBooks = booksArray.filter(book => (selected.length ? selected.includes(book.id) : true));

    return {
      books: filteredBooks,
    };
  },
  { deleteBook, editBook },
)(BooksList);
