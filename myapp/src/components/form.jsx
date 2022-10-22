import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicTextFields() {
  return (
    <div>
    <h1>Form</h1>
    <Box
    
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="First Name" variant="standard" /><br/>
      <TextField id="standard-basic" label="Last Name" variant="standard" /><br/>
      <TextField id="standard-basic" label="Email" variant="standard" /><br/>
      <Stack spacing={2} direction="row"></Stack>
      <Button variant="contained">Submit</Button>
    </Box>
    </div>
  );
}
