const catchAsync = require("express-async-handler");
const createHttpErrors = require("http-errors");

exports.register = catchAsync((req, res) => {
  res.send({ message: "Register Controller" });
});

exports.login = catchAsync((req, res) => {
  res.send({ message: "Login Controller" });
});

exports.logout = catchAsync((req, res) => {
  res.send({ message: "Logout Controller" });
});

exports.refreshToken = catchAsync((req, res) => {
  res.send({ message: "Refresh Token Controller" });
});
