const pool = require("../config/config")
const bcrypt = require("bcrypt");

const register = async(req, res) => {
    const { username, password, email, country, city } = req.body
    const maxId = await pool.query('SELECT max(id) FROM users')
    const inputId = maxId.rows[0].max + 1
    // console.log(inputId)
    // res.send(`datata ${inputId}`)

    const encrypt = (password) => bcrypt.hashSync(password, 10);
    const encryptedPassword = encrypt(password);
  
    pool.query('INSERT INTO users (id, username, password, email, country, city) VALUES ($1, $2,$3,$4,$5,$6)', [inputId, username, encryptedPassword, email, country, city ], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`User added : ${username}`)  
    })
  }

module.exports = {
    register
}