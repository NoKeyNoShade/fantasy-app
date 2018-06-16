const dbPool = require('./db');

function getLeagues() {
  const q = {
    name: 'get-leagues',
    text: `
      SELECT * FROM league
      WHERE active = true;
    `
  };

  return new Promise((resolve, reject) => dbPool.query(q).then(resp => resolve(resp.rows)).catch(err => reject(err)));
}

module.exports = getLeagues;