const pool = require("../config/config")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (id, username) => {
  const payload = {id: id, username: username,};
  const secret = "Secret Code";
  const token = jwt.sign(payload, secret);
  return token;
};

// const checkPassword = (username, password) => bcrypt.compareSync(password, user.password);

// authenticate = async ({ username, password }) => {
//   try {
//     const userCheck = await user.findOne({ where: { username } });
//     if (!userCheck) return Promise.reject({ msg: "User not found!" });

//     const isPasswordCorrect = checkPassword(userCheck, password);
//     if (!isPasswordCorrect) return Promise.reject({ msg: "Wrong password!" });

//     return Promise.resolve(userCheck);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// login: (req, res, next) => {
//     authenticate(req.body)
//       .then((user) => {
//         res.send(format(user));
//       })
//       .catch((err) => next(
//         res.status(401).json(err), res
//       ));
//   },


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