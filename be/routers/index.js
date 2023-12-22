const express = require("express");
const router = express.Router();

// router
router.use("/v1/api/event", require("./event"));

module.exports = router;
