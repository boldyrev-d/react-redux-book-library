import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { changeSelection } from '../../AC/filters';

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 20px;
`;

const SelectFilter = (props) => {
  const { books, selected } = props;
  const options = books.map(book => ({
    label: book.title,
    value: book.id,
  }));

  // eslint-disable-next-line max-len
  const handleChange = selectedItems => props.changeSelection(selectedItems.map(option => option.value));

  return (
    <Wrapper>
      <Title>
Search books
      </Title>
      <Select
        options={options}
        value={selected}
        placeholder="Type book name..."
        multi
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default connect(
  state => ({
    selected: state.filters.get('selected'),
    books: state.books
      .get('entities')
      .valueSeq()
      .toArray(),
  }),
  { changeSelection },
)(SelectFilter);
