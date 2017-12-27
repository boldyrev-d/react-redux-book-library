import React from 'react';
import EditForm from '../EditForm';
import BooksList from '../BooksList';
import SelectFilter from '../SelectFilter';

const App = () => (
  <div>
    <EditForm />
    <SelectFilter />
    <BooksList />
  </div>
);

export default App;
