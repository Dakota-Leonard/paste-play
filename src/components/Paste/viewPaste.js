import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewPaste = props => {
  //Component did mount so get log
  useEffect(() => {
    const fetchLog = async () => {
      const { data } = await axios.get(`/api/view/${props.match.params.url}`);
      console.log(data);
    };
    fetchLog();
  }, [props.match.params.url]);

  const createMarkup = () => {
    return { __html: 'First &middot; Second' };
  };

  return (
    <Card
      variant="elevation"
      elevation={0}
      sx={{
        backgroundColor: '#000',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '1%',
        alignItems: 'center',
        width: '80%',
        minHeight: '90vh',
        marginLeft: '10%',
        marginTop: '1%',
      }}
    ></Card>
  );
};

export default ViewPaste;
