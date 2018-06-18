const dbPool = require('../db');

function getUsersByLeague(leagueId) {
  const q = {
    name: 'get-users-by-league-id',
    text: `
    SELECT
      u.id,
      u.email,
      u.first_name,
      u.last_name,
      u.created_at,
      ul.role
    FROM "user" u
    INNER JOIN user_league ul
      ON u.id = ul.user_id
    WHERE
      ul.league_id = $1 AND u.deleted_at IS NULL; 
    `,
    values: [leagueId]
  };

  return new Promise((resolve, reject) => dbPool.query(q).then(resp => resolve(resp.rows)).catch(err => reject(err)));
}

module.exports = getUsersByLeague;