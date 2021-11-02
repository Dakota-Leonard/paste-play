const express = require('express');
const router = express.Router();
const lzma = require('lzma-native');
const Log = require('../db/log');

router.get('/', (req, res, next) => {
  try {
    res.send('Hello from the api route :)');
  } catch (error) {
    next(error);
  }
});

router.post('/new', async (req, res, next) => {
  try {
    const logText = req.body.text;
    const title = req.body.title;
    const compressedText = await lzma.compress(logText, 9);
    const newLog = await Log.create({
      text: compressedText,
      title: title,
    });

    res.json(newLog);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
