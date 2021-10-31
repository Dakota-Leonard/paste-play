const db = require('./database');
const Log = require('./log');
const User = require('./user');

//Associations
User.hasMany(Log);
Log.belongsTo(User);

module.exports = {
  db,
  User,
  Log,
};
