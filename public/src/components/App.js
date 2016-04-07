import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <h3>The todo part.</h3>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
