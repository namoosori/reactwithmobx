import React, { Component } from 'react';
import TodoEditFormContainer from './containers/TodoEditFormContainer';
import TodoListContainer from './containers/TodoListContainer';

import {Box, Container} from '@material-ui/core';
import SearchbarContainer from './containers/SearchbarContainer';

class App extends Component {
  render(){
    return (
      <Container >
        <Box m={3}><TodoEditFormContainer /></Box>
        <Box m={3}>
          <SearchbarContainer />
          <TodoListContainer />
        </Box>
      </Container>
  );
  }
}

export default App;
