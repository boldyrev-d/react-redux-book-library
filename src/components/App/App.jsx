import React from 'react';
import styled from 'styled-components';
import EditForm from '../EditForm';
import BooksList from '../BooksList';
import SelectFilter from '../SelectFilter';
import SortToolbar from '../SortToolbar';

const Root = styled.main`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 15px;
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
