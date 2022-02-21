const router = require("express").Router();
const login = require("../controller/login");
// const restrict = require('../middlewares/restrict')

router.post("/login", login.login);

module.exports = router;
