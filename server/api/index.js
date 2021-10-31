const express = require('express');
const router = express.Router();
const lzma = require('lzma-native');

router.get('/', (req, res, next) => {
  try {
    res.send('Hello from the api route :)');
  } catch (error) {
    next(error);
  }
});

router.get('/:text', async (req, res, next) => {
  const text = req.params.text;
  const compressedLine = await lzma.compress(text, 9);
  res.json(compressedLine.toString());
});

module.exports = router;
