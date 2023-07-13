const express = require("express");
const {
  register,
  login,
  logout,
  refreshToken,
} = require("../controllers/auth.controller");
const router = express.Router();

router.route("/register").get(register);
router.route("/login").get(login);
router.route("/logout").get(logout);
router.route("/refreshToken").get(refreshToken);

module.exports = router;
