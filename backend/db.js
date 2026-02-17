const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// 🔍 DEBUG: Check which database we are connected to
pool.query('SELECT current_database()')
  .then(res => console.log('Connected to DB:', res.rows[0].current_database))
  .catch(err => console.error('DB Connection Error:', err));

module.exports = pool;
