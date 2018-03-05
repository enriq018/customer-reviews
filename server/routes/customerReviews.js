const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world again!");
});
router.post("/", (req, res) => {
  res.send("hello world again that was a post!");
});

module.exports = router;
