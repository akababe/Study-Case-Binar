const router = require("express").Router();
const login = require("../controller/login");
// const restrict = require('../middlewares/restrict')

const logGet = (req,res) => {
    res.json({
        msg :"Api Register sudah ada"
    })
}

router.get("/login", logGet)
router.post("/login", login.login);

module.exports = router;
