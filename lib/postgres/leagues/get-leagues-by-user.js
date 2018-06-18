

const dbPool = require('../db');


function getLeaguesByUser(userId) {
  const q = {
    name: 'get-leagues-by-user-id',
    text: `
      SELECT
        l.id,
        l.label,
        l.active,
        l.week,
        l.season_id,
        l.created_at
      FROM league l
      INNER JOIN user_league ul
        on l.id = ul.league_id
      WHERE
        ul.user_id = $1
        AND ul.deleted_at IS NULL
        AND l.deleted_at IS NULL;
    `,
    values: [userId]
  };

  return new Promise((resolve, reject) => dbPool.query(q).then(resp => resolve(resp.rows)).catch(err => reject(err)));
}

module.exports = getLeaguesByUser;