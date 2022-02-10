// DATABASE_URL=postgres://postgres:akaarinda@localhost:5432/dbtest

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'akaarinda',
  host: 'localhost',
  database: 'dbtest',
  password: 'akaarinda',
  port: 5432,
})


module.exports = pool

