import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { media } from '../../styleUtils';

import { deleteBook, editBook } from '../../AC/books';

import cross from './cross.svg';
import pen from './pen.svg';

const Buttons = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  display: flex;
  justify-content: center;
  transform: translate(-50%, 100%);
  transition: transform 0.1s ease-in-out;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: 200px;
  height: 165px;
  border: 1px solid #e2e2e2;
  overflow-y: hidden;
  transition: background 0.15s ease-in-out;

  &:hover {
    background: #e2e2e2;
  }

  &:hover ${Buttons} {
    position: relative;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
  }

  ${media.tablet`
    width: 100%;
    margin-right: 0;
  `};
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
`;

const Info = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin: 0;
  padding: 0;
  background: #3f51b5;
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  transition: background 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #5c6bc0;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const ButtonIcon = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 auto;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Book = ({
  book: {
    title,
    year,
    author,
    pages,
    id,
    // eslint-disable-next-line no-shadow
    editBook,
    // eslint-disable-next-line no-shadow
    deleteBook,
  },
}) => (
  <Wrapper>
    <Title>
      {title}
    </Title>
    <div>
      <Info>
        Year:
        {year}
      </Info>
      <Info>
        Author:
        {author}
      </Info>
      <Info>
        Pages:
        {pages}
      </Info>
    </div>
    <Buttons>
      <Button title="Edit book" onClick={() => editBook(id)}>
        <ButtonIcon src={pen} />
      </Button>
      <Button
        title="Delete book"
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals, no-alert
          if (confirm('Вы уверены?')) {
            deleteBook(id);
          }
        }}
      >
        <ButtonIcon src={cross} />
      </Button>
    </Buttons>
  </Wrapper>
);

export default connect(
  null,
  { deleteBook, editBook },
)(Book);
