const { userModel } = require("../models/index");
const createHttpError = require("http-errors");

exports.createUser = async (userData) => {
  const { name, email, picture, status, password } = userData;
  const checkEmail = await userModel.findOne({ email });
  if (checkEmail) {
    throw createHttpError.Conflict(
      "Please try again with a different email address, this email already exist."
    );
  }

  const user = await new userModel({
    name,
    email,
    picture,
    status,
    password,
  }).save();

  return user;
};
