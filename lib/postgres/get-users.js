const dbPool = require('./db');

function getUsersByLeague(leagueId) {
  const q = {
    name: 'get-users-by-league-id',
    text: `
      SELECT
        users.id,
        users.email,
        users.first_name,
        users.last_name,
        users.created_at,
        user_league.role
      FROM users
      INNER JOIN user_league
        ON user.id = user_league.user_id
      WHERE
        user_league.league_id = $1 AND user.deleted_at IS NULL; 
    `,
    values: [leagueId]
  };

  return new Promise((resolve, reject) => dbPool.query(q).then(resp => resolve(resp.rows)).catch(err => reject(err)));
}

module.exports = getUsersByLeague;