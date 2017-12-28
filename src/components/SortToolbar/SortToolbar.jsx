import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BasicButton from '../Button';
import { changeSort } from '../../AC/filters';

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 20px;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled(BasicButton)`
  margin-bottom: 8px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const SortToolbar = props => (
  <Wrapper>
    <Title>Sort books</Title>
    <Buttons>
      <Button onClick={() => props.changeSort('title')}>Sort by title</Button>
      <Button onClick={() => props.changeSort('author')}>Sort by author</Button>
      <Button onClick={() => props.changeSort('year')}>Sort by year</Button>
      <Button onClick={() => props.changeSort('pages')}>Sort by pages</Button>
    </Buttons>
  </Wrapper>
);

export default connect(null, { changeSort })(SortToolbar);
