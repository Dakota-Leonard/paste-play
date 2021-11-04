const Sequelize = require('sequelize');
const db = require('./database');
const md5 = require('md5');

const Log = db.define('Log', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  text: {
    type: Sequelize.BLOB,
    allowNull: false,
    notEmpty: true,
  },

  type: {
    type: Sequelize.ENUM('normal', 'playable'),
    defaultValue: 'normal',
  },

  hidden: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },

  views: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  url: {
    type: Sequelize.STRING,
  },
});

Log.afterSave(async log => {
  const url = md5(log.id);
  log.url = url;
  await log.save();
});

module.exports = Log;
