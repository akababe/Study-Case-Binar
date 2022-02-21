const router = require("express").Router();
const register = require("../controller/register");

const regGet = (req,res) => {
    res.json({
        msg :"Api Register sudah ada"
    })
}

router.get("/register", register.getDatas)
router.post("/register", register.register)


module.exports = router;