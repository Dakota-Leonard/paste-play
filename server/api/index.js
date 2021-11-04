const express = require('express');
const router = express.Router();
const lzma = require('lzma-native');
const Log = require('../db/log');
const md5 = require('md5');

router.get('/', (req, res, next) => {
  try {
    res.send('Hello from the api route :)');
  } catch (error) {
    next(error);
  }
});

router.post('/new', async (req, res, next) => {
  try {
    const { title, text, type } = req.body;
    //LZMA Compression
    const compressedText = await lzma.compress(text, 9);
    const newLog = await Log.create({
      title: title,
      text: compressedText,
      type: type,
    });
    const url = await md5(newLog.id);
    newLog.url = url;
    await newLog.save();
    res.json(newLog);
  } catch (error) {
    next(error);
  }
});

//View normal log
router.get('/view/:url', async (req, res, next) => {
  try {
    const logUrl = req.params.url;
    const log = await Log.findOne({ where: { url: logUrl } });

    //Check for log existing
    if (log) {
      //Decompress buffer
      let decompressedText = await lzma.decompress(log.text);
      //Convert buffer to string
      decompressedText = decompressedText.toString();
      log.views = log.views + 1;
      await log.save();
      //Building json object to send
      const jsonLog = {
        title: log.title,
        text: decompressedText,
        views: log.views,
      };
      res.json(jsonLog);
    } else {
      res.send('Sorry! Could not find that log :(');
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
