const express = require('express');
const app = express();
const { db, User } = require('./db');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

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
