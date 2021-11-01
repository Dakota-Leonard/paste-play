const express = require('express');
const app = express();
const { db, User } = require('./db');

//Route to /api router
app.use('/api', require('./api'));

const PORT = process.env.PORT || 3001;

const serverInit = async () => {
  await db.sync({ force: true });
  await User.create({
    username: 'Dakota',
    hidden: false,
  });
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};

serverInit();
