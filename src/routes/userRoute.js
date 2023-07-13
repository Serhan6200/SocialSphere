const express = require("express");
const trimRequest = require("trim-request");
const userController = require("../controllers/userController");
const router = express.Router();

router.route("/createUser").post(trimRequest.all, userController.createUser);

module.exports = router;
