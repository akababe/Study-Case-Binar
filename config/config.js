// DATABASE_URL=postgres://postgres:akaarinda@localhost:5432/dbtest

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.USER_ID,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.PASS_ID,
  port: 5432,
})


module.exports = pool

