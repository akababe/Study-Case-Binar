const login = require("./login")
const register = require("./register")
const materials = require ("./materials")
const router = require("express").Router()

const homepage = (req,res) => {
    res.json({
        msg :"Api sudah jalan di homepage"
    })
}

const homepageId =(req,res)=>{
    const id = req.params.id
    res.json({
        msg : `api ini menerima nilai ${id}`
    })
}

router.get("/",homepage)
// router.get("/:id",homepageId)
router.use("/api", materials)
router.use("/api", register);
router.use("/api", login);

module.exports = router