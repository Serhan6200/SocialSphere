const catchAsync = require("express-async-handler");
const userService = require("../services/userService");

exports.createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.send(user);
});
