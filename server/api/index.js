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
    console.log(newLog);
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
    console.log(log);
    res.json(log);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
