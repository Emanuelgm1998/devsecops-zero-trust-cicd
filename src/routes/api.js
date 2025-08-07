const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Secure DevSecOps API running" });
});

module.exports = router;
