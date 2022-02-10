const getUsers = require("../controller")
const login = require("./login")
const register = require("./register")
const data = require ("./data")
const router = require("express").Router()

const homepage = (req,res) => {
    res.json({
        msg :"Api sudah jalan di homepage"
    })
}

router.get("/",homepage)
router.use("/data", data)
// router.use("/register", register);
// router.use("/login", login);

module.exports = router