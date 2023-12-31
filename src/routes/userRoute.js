const express = require("express");
const trimRequest = require("trim-request");
const validate = require("../middlewares/validate");
const userValidate = require("../validation/userValidation");
const userController = require("../controllers/userController");
const router = express.Router();

router
  .route("/createUser")
  .post(
    trimRequest.all,
    validate(userValidate.createUser),
    userController.createUser
  );
router
  .route("/:id")
  .get(trimRequest.all, validate(userValidate.getUser), userController.getUser);

module.exports = router;
