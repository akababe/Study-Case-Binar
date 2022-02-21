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
router.use("/api", register);
router.use("/api", login);

module.exports = router