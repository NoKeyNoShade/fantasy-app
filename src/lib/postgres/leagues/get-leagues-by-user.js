// @flow
import type { League } from '../../../../custom-defs/models';

const dbPool = require('../db');


type DBResp = {
  rows: League[],
};

function getLeaguesByUser(userId: string): Promise<void> {
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
    values: [userId],
  };

  return new Promise((resolve, reject) => dbPool.query(q)
    .then((resp: DBResp) => resolve(resp.rows))
    .catch((err: string) => reject(err)));
}

module.exports = getLeaguesByUser;
