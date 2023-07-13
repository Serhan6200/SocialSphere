const catchAsync = require("express-async-handler");

exports.createUser = catchAsync((req, res) => {
  res.send(req.body);
});
