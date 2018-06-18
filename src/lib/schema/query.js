const league = require('./league');
const users = require('./user');

const query = {
  getLeaguesByUser: league.getLeaguesByUser,
  getLeagues: league.getLeagues,
  getUsersByLeague: users.getUsersByLeague,
};

module.exports = query;
