const Sequelize = require('sequelize');
const db = require('./database');

const Log = db.define('Log', {
  text: {
    type: Sequelize.BLOB,
    allowNull: false,
    notEmpty: true,
  },

  title: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  hidden: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },

  views: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Log;
