// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'akaarinda',
//   host: 'localhost',
//   database: 'dbtest',
//   password: 'akaarinda',
//   port: 5432,
// })
const pool = require("../config/config")

const getUsers = (req, res) => {
    pool.query('SELECT * FROM friends_house ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

module.exports = getUsers