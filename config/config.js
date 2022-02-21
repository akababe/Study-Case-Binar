// DATABASE_URL=postgres://postgres:akaarinda@localhost:5432/dbtest

const { Pool, Client } = require('pg')
const connectionString = 'postgres://kzgpsofluyrshb:b4892d115936049241a6b1469b480e42ca20c3a98ea05df96ac5fb87a370ec52@ec2-54-158-26-89.compute-1.amazonaws.com:5432/d3d5a9s5dc1l76'
const pool = new Pool({
  connectionString,
})

// const pool = new Pool({
//   user: process.env.USER_ID,
//   host: process.env.DB_HOST,
//   database: process.env.DB,
//   password: process.env.PASS_ID,
//   port: 5432,
// })

module.exports = pool

