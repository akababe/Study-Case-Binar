const router = require("express").Router();
const modifyData = require("../controller/modifydata");

// import middleware
// const restrict = require('../middlewares/restrict');

router.get("/materials", modifyData.getDatas);
router.get("/friendsHome/searchData", modifyData.getDataById)
router.post("/friendsHome/insertData", modifyData.createData)
router.put("/friendsHome/editData", modifyData.updateData)
router.delete("/friendsHome/deleteData", modifyData.deleteData)

// createData,
// updateData,
// deleteData

module.exports = router;
