import { Card, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';

const PlayPaste = props => {
  const [log, setLog] = useState('');
  const [title, setTitle] = useState('');
  const [views, setViews] = useState(0);
  const [logExists, setLogExists] = useState(true);
  const [sortedLog, setSortedLog] = useState([]);
  const [playingLog, setPlayingLog] = useState([
    `<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01//EN' 'http://www.w3.org/TR/html4/strict.dtd'>
  <html>
   <head>
    <meta http-equiv='content-type' content='text/html; charset=utf-8'>  <meta name='generator' content='Mudlet MUD Client version: 4.11.2'>
    <title>Mudlet, main console extract from Romaen 2 profile</title>
    <style type='text/css'>
     <!-- body { font-family: 'Bitstream Vera Sans Mono', 'Courier New', 'Monospace', 'Courier'; font-size: 100%; line-height: 1.125em; white-space: nowrap; color:rgb(255,255,255); background-color:rgb(0,0,0);}
          span { white-space: pre-wrap; } -->
    </style>
    </head>`,
  ]);

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

        //Map each line and sort by time in reverse
        //Allows us to use pop() at O(1) instead of O(n) shift() if needed in the future
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
      setSortedLog(parseLines());
    } catch (error) {
      console.error(error);
    }
  }, [props.match.params.url, log]);

  //Starts timers to play based on sortedLog
  useEffect(() => {
    const startPlaying = () => {
      if (!sortedLog || !sortedLog.length) {
        return;
      }
      const startLine = sortedLog[0][0];

      sortedLog.forEach(line => {
        setTimeout(() => {
          setPlayingLog(prevLog => [...prevLog, line[1]]);
          const scrollToEnd = () => {
            const logCard = document.querySelector('#log-card');
          };
          scrollToEnd();
        }, line[0] - startLine);
      });
    };
    startPlaying();
  }, [sortedLog]);

  const createMarkup = what => {
    return { __html: what };
  };

  //Log not found
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
        className="log-card"
        sx={{
          backgroundColor: '#000',
          display: 'flex',
          flexWrap: 'wrap',
          padding: '1%',
          alignItems: 'center',
          width: '80%',
          minHeight: '90vh',
          maxHeight: '90vh',
          marginLeft: '10%',
          overflow: 'auto',
        }}
      >
        <div dangerouslySetInnerHTML={createMarkup(playingLog.join(''))} />
      </Card>
    </>
  );
};

export default PlayPaste;
