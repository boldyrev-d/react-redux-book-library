import React from 'react';
import styled from 'styled-components';
import EditForm from '../EditForm';
import BooksList from '../BooksList';
import SelectFilter from '../SelectFilter';
import SortToolbar from '../SortToolbar';
import { media } from '../../styleUtils';

const Root = styled.main`
  display: flex;

  ${media.phablet`
    flex-direction: column;
  `};
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

const App = () => (
  <Root>
    <EditForm />
    <ContentWrapper>
      <SelectFilter />
      <SortToolbar />
      <BooksList />
    </ContentWrapper>
  </Root>
);

export default App;
