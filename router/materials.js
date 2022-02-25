const router = require("express").Router();
const modifyData = require("../controller/modifydata");

// import middleware
// const restrict = require('../middlewares/restrict');

router.get("/materials", modifyData.getDatas);
router.get("/materials", modifyData.getDataById)
router.post("/materials", modifyData.createData)
router.put("/materials", modifyData.updateData)
router.delete("/materials", modifyData.deleteData)

// createData,
// updateData,
// deleteData

module.exports = router;
