import React from 'react';
import EditForm from '../EditForm';
import BooksList from '../BooksList';
import SelectFilter from '../SelectFilter';
import SortToolbar from '../SortToolbar';

const App = () => (
  <div>
    <EditForm />
    <SelectFilter />
    <SortToolbar />
    <BooksList />
  </div>
);

export default App;
