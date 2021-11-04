const Sequelize = require('sequelize');
const db = require('./database');

const Log = db.define('Log', {
  title: {
    type: Sequelize.STRING(100),
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

module.exports = Log;
