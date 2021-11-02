import React from 'react';
import { TextField, Paper, Button } from '@mui/material';

const Paste = () => {
  return (
    <Paper
      variant="elevation"
      elevation={0}
      sx={{
        backgroundColor: '#FAF9F6',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '1%',
        alignItems: 'center',
        width: '80%',
        marginLeft: '10%',
        marginTop: '1%',
      }}
    >
      <TextField
        id="title-input"
        label="Title"
        sx={{ width: '100%', marginBottom: '1%' }}
      />

      <TextField
        id="log-input"
        label="Paste Log Here!"
        sx={{ width: '100%', marginBottom: '1%' }}
        multiline
        rows={30}
      />
      <Button color="secondary" variant="contained">
        Submit!
      </Button>
    </Paper>
  );
};

export default Paste;
