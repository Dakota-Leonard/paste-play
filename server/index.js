const express = require('express');
const app = express();

//Route to /api router
app.use('/api', require('./api'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
