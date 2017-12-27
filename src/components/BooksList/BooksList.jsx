import React from 'react';
import { connect } from 'react-redux';

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
        </li>
      ))}
    </ul>
  );

  return <div>{booksList}</div>;
};

export default connect((state) => {
  const books = Object.values(state.books.entities);

  return {
    books,
  };
})(BooksList);
