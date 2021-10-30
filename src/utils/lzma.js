const lzma = require('lzma');

export const compressText = async text => {
  const compressedText = await lzma.compress(text, 9);
  return compressedText;
};
