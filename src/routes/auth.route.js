const express = require("express");
const router = express.Router();

router.route("/register").get((req, res) => {
  res.send({ message: "Register API Route" });
});

module.exports = router;
