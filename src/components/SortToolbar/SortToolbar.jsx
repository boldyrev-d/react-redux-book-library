import React from 'react';
import { connect } from 'react-redux';
import { changeSort } from '../../AC/filters';

const SortToolbar = props => (
  <div>
    <button onClick={() => props.changeSort('title')}>Sort by Title</button>
    <button onClick={() => props.changeSort('author')}>Sort by Author</button>
    <button onClick={() => props.changeSort('year')}>Sort by Year</button>
    <button onClick={() => props.changeSort('pages')}>Sort by Pages</button>
  </div>
);

export default connect(null, { changeSort })(SortToolbar);
