import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';
import Book from '../Book';

const List = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const BooksList = (props) => {
  const { books } = props;

  const booksList = books.map(book => <Book key={book.id} book={book} />);

  return (
    <List>
      <FlipMove duration="300" typeName={null}>
        {booksList}
      </FlipMove>
    </List>
  );
};

export default connect((state) => {
  const { books, filters } = state;
  const selected = filters.get('selected');
  const sortBy = filters.get('sortBy');

  const booksArray = books
    .get('entities')
    .valueSeq()
    .sortBy(book => (typeof book[sortBy] === 'string' ? book[sortBy].toLowerCase() : book[sortBy]))
    .toArray();
  // eslint-disable-next-line max-len
  const filteredBooks = booksArray.filter(book => (selected.length ? selected.includes(book.id) : true));

  return {
    books: filteredBooks,
  };
})(BooksList);
