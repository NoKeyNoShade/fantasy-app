const league = require('./league');
const users = require('./user');

const query = {
  getLeagues: league.getLeagues,
  getUsersByLeague: users.getUsersByLeague
};

module.exports = query;