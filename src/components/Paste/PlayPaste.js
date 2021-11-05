import { Card, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';

const PlayPaste = props => {
  const [log, setLog] = useState('');
  const [title, setTitle] = useState('');
  const [views, setViews] = useState(0);
  const [logExists, setLogExists] = useState(true);

  //Component did mount so get log
  useEffect(() => {
    try {
      const fetchLog = async () => {
        const { data } = await axios.get(`/api/view/${props.match.params.url}`);
        if (data !== 'Sorry! Could not find that log :(') {
          const { title, text, views } = data;
          setLogExists(true);
          setTitle(title);
          setLog(text);
          setViews(views);
        } else {
          setLogExists(false);
        }
      };
      fetchLog();

      //Regex for each line to be rendered
      const regex =
        /<span style="color: rgb\(200,150,0\); background: rgb\(22,22,22\); ">(\d{2}:\d{2}:\d{2}\.\d{1,3}) (.+)<br>/g;

      //Build Array of timestamps and lines
      const matchArr = log.match(regex);

      //Function to get lines and timestamps in MS
      const parseLines = () => {
        const timeRegex = /\d{2}:\d{2}:\d{2}\.\d{1,3}/;

        if (!matchArr || !matchArr.length) {
          return;
        }
        const msArr = matchArr.map(line => {
          const timeMatch = line.match(timeRegex);
          return [timeMatch[0], line];
        });

        return msArr.map(line => {
          const timeSplit = line[0].split(':');
          //Assign parts of split
          let hour = Number(timeSplit[0]);
          let min = Number(timeSplit[1]);
          let sec = Number(timeSplit[2]);

          //Convert hours to mins and mins to secs
          min += hour * 60;
          sec += min * 60;
          let milli = sec * 1000;
          return [milli, line[1]];
        });
      };
      console.log(parseLines());
    } catch (error) {
      console.error(error);
    }
  }, [props.match.params.url, log]);

  const createMarkup = () => {
    return { __html: log };
  };

  if (!logExists) {
    return (
      <>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Sorry! Could not find that log :(
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="https://i.giphy.com/media/dJYoOVAWf2QkU/giphy.webp"
            alt="sad pikachu"
            sx={{ textAlign: 'center' }}
          />
        </Box>
      </>
    );
  }

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

export default PlayPaste;
