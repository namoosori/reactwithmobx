import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';

class CounterComponent extends Component {

  render(){
    return(
      <div>
        <Button variant='contained' color='primary' size='large'> - </Button>        
        
        <Box component='span' m={5}> 0 </Box>
        
        <Button variant='contained' color='primary' size='large'> + </Button>
      </div>
    )
  }
}

export default CounterComponent;