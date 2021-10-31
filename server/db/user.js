const Sequelize = require('sequelize');
const db = require('./database');

const User = db.define('User', {
  username: {
    type: Sequelize.STRING(20),
    unique: true,
    allowNull: false,
    notEmpty: true,
  },

  hidden: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
