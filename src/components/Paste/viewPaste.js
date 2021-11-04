import { Paper } from '@mui/material';
import React, { useEffect } from 'react';
import axios from 'axios';

const ViewPaste = props => {
  //Component did mount get log
  useEffect(() => {
    console.log(props.match.params.url);
  }, []);
  return <Paper>TEST</Paper>;
};

export default ViewPaste;
