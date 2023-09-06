import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
       placeholder='Enter your email'
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Enter your Name"
          multiline
        />
        <AddIcon/>
                
      </div>
      <div>

  
 <Button variant="contained" color='error'>
    
 <AddOutlinedIcon /> 
    </Button>          
      </div>
    </Box>
  );
}