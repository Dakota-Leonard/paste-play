import React, { useState } from 'react';
import {
  TextField,
  Paper,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import axios from 'axios';

const PasteForm = () => {
  const [title, setTitle] = useState('');
  const [log, setLog] = useState('');

  const titleChangeHandle = event => {
    setTitle(event.target.value);
  };

  const logChangeHandle = event => {
    setLog(event.target.value);
    logValidation();
  };

  const logValidation = () => {
    return log.trim().length < 1;
  };

  const submitClickHandle = async event => {
    event.preventDefault();

    if (log.trim().length < 1) {
    }

    console.log(log);
    try {
      const { data } = await axios.post('/api/new', {
        text: log,
        title: title,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

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
        value={title}
        onChange={titleChangeHandle}
        sx={{ width: '100%', marginBottom: '1%' }}
      />

      <TextField
        id="log-input"
        label="Paste Log Here!"
        value={log}
        onChange={logChangeHandle}
        error={logValidation()}
        sx={{ width: '100%', marginBottom: '1%' }}
        multiline
        required
        rows={25}
      />
      <FormControl component="fieldset" sx={{ width: '100%' }}>
        <FormLabel component="legend">Log Type</FormLabel>
        <RadioGroup row aria-label="log type" name="row-radio-buttons-group">
          <FormControlLabel
            value="normal"
            control={<Radio />}
            label="Normal"
            checked
          />
          <FormControlLabel
            value="playable"
            control={<Radio />}
            label="Playable"
          />
        </RadioGroup>
      </FormControl>
      <Button onClick={submitClickHandle} color="secondary" variant="contained">
        Submit!
      </Button>
    </Paper>
  );
};

export default PasteForm;
