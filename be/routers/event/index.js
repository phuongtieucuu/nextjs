const express = require("express");
const eventModel = require("../../models/event.model");
const router = express.Router();
router.get("/", async (req, res, next) => {
  const result = await eventModel.find();
  return res.json({
    data: result,
  });
});

module.exports = router;
