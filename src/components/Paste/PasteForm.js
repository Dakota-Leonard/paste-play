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
  const [logType, setLogType] = useState('normal');
  const [titleError, setTitleError] = useState(false);
  const [logError, setLogError] = useState(false);

  const titleChangeHandle = event => {
    setTitle(event.target.value);
  };

  const logChangeHandle = event => {
    setLog(event.target.value);
  };

  const logTypeChangeHandle = event => {
    setLogType(event.target.value);
  };

  const submitClickHandle = async event => {
    event.preventDefault();

    //Validation for recoloring of textfields
    if (title.trim() === '') {
      setTitleError(true);
      return;
    } else {
      setTitleError(false);
    }

    //Validation for recoloring of textfield
    if (log.trim() === '') {
      setLogError(true);
      return;
    } else {
      setLogError(false);
    }

    try {
      const { data } = await axios.post('/api/new', {
        title: title,
        text: log,
        type: logType,
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
        error={titleError}
        sx={{ width: '100%', marginBottom: '1%' }}
        required
      />

      <TextField
        id="log-input"
        label="Paste Log Here!"
        value={log}
        onChange={logChangeHandle}
        error={logError}
        sx={{ width: '100%', marginBottom: '1%' }}
        multiline
        required
        rows={25}
      />
      <FormControl component="fieldset" sx={{ width: '100%' }}>
        <FormLabel component="legend">Log Type</FormLabel>
        <RadioGroup
          row
          aria-label="log-type"
          name="log-type-select"
          value={logType}
          onChange={logTypeChangeHandle}
        >
          <FormControlLabel
            value="normal"
            name="log-type"
            control={<Radio />}
            label="Normal"
          />
          <FormControlLabel
            value="playable"
            name="log-type"
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
