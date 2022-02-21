const pool = require("../config/config")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (id, username) => {
  const payload = {id: id, username: username,};
  const secret = "Secret Code";
  const token = jwt.sign(payload, secret);
  return token;
};

const login = async(req, res)=>{
    const {id, username, password} = req.body
    const userCheck =await pool.query('SELECT * FROM users WHERE username = $1', [username])
    const isUserFind = userCheck.rowCount

    if (!isUserFind) return (res.json("Id tidak ditemukan"))
    const checkPassword = (password) => bcrypt.compareSync(password, userCheck.rows[0].password)
    const isPasswordCorrect = checkPassword(password);
    if (!isPasswordCorrect) return (res.json("passord salah"))

    const releaseToken = (id, username) => {
          return {username,accessToken: generateToken(id, username)
          }
    }
    return (res.json(releaseToken(id,username)))
}

module.exports = {
    login
}