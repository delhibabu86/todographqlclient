import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header.js';
import AddTodo from './AddTodo.js';
import TodoLists from './TodoLists';

const App = () => (
  <React.Fragment>
    <Container>
      <Header />
      <AddTodo />
      <TodoLists />
    </Container>
  </React.Fragment>
);

export default App;