import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import { changeSelection } from '../../AC/filters';

const SelectFilter = (props) => {
  const { books, selected } = props;
  const options = books.map(book => ({
    label: book.title,
    value: book.id,
  }));

  const handleChange = selectedItems =>
    props.changeSelection(selectedItems.map(option => option.value));

  return <Select options={options} value={selected} multi onChange={handleChange} />;
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
