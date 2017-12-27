import React from 'react';
import { connect } from 'react-redux';
import { deleteBook } from '../../AC/books';

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
          <button onClick={() => props.deleteBook(book.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );

  return <div>{booksList}</div>;
};

export default connect(
  (state) => {
    const { books } = state;

    const booksArray = books
      .get('entities')
      .valueSeq()
      .toArray();

    return {
      books: booksArray,
    };
  },
  { deleteBook },
)(BooksList);
