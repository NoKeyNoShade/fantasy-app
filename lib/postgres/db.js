const { Pool } = require('pg');

const config = {
  user: 'garrett',
  host: 'localhost',
  database: 'drag_race_fantasy',
  password: '',
  port: 5432
};

module.exports = new Pool(config);