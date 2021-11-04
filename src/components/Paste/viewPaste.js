import { Paper } from '@mui/material';
import React, { useEffect } from 'react';
import axios from 'axios';

const ViewPaste = props => {
  //Component did mount get log
  useEffect(() => {
    const fetchLog = async () => {
      const { data } = await axios.get(`/api/view/${props.match.params.url}`);
      console.log(data);
    };
    fetchLog();
  }, []);
  return <Paper>TEST</Paper>;
};

export default ViewPaste;
