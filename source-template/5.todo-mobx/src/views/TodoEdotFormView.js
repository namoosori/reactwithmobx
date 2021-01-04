import 'date-fns';
import React, { PureComponent } from 'react';
import { TextField, Grid, Button, Box} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

class TodoEditFormView extends PureComponent {
  render(){

    const selectedDate = new Date();

    return(
      <form noValidate>
        <Grid container xs={12} spacing={3}>
          <Grid item xs={3}>
            <TextField 
              margin="normal"
              id="outlined-basic" 
              label="Title" 
              variant="standard" />
          </Grid>
          <Grid item xs={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date"
                format="yyyy-MM-dd"
                value={selectedDate}
                // onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid item >
         <Button variant='contained' color='primary' startIcon={<SaveIcon />}>Add</Button>&nbsp;&nbsp;
         <Button variant='contained' color='default' startIcon={<UpdateIcon />}>Update</Button>&nbsp;&nbsp;
         <Button variant='contained' color='secondary' startIcon={<DeleteIcon />}>Delete</Button>&nbsp;&nbsp;
          
        </Grid>
      </form>
    )
  }
}

export default TodoEditFormView;