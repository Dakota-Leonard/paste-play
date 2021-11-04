import { Card, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewPaste = props => {
  const [log, setLog] = useState('');
  const [title, setTitle] = useState('');
  const [views, setViews] = useState(0);

  //Component did mount so get log
  useEffect(() => {
    const fetchLog = async () => {
      const { data } = await axios.get(`/api/view/${props.match.params.url}`);
      const { title, text, views } = data;
      setTitle(title);
      setLog(text);
      setViews(views);
    };
    fetchLog();
  }, [props.match.params.url]);

  const createMarkup = () => {
    return { __html: log };
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          borderColor: 'DimGray',
          backgroundColor: '#000 ',
          color: '#fff',
          textAlign: 'center',
          width: '80%',
          marginLeft: '10%',
          marginTop: '0.2%',
        }}
      >
        {`${title} - VIEWS: ${views}`}
      </Card>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: '#000',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '1%',
          alignItems: 'center',
          width: '80%',
          minHeight: '60vh',
          maxHeight: '90vh',
          marginLeft: '10%',
          overflow: 'auto',
        }}
      >
        <div dangerouslySetInnerHTML={createMarkup()} />
      </Card>
    </>
  );
};

export default ViewPaste;
