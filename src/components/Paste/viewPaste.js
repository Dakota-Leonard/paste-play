import { Paper } from '@mui/material';
import React, { useEffect } from 'react';

const ViewPaste = props => {
  //Component did mount get log
  useEffect(() => {
    console.log(props);
  }, []);
  return <Paper>TEST</Paper>;
};

export default ViewPaste;
