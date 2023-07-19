const { userModel } = require("../models/index");
const createHttpError = require("http-errors");

const { DEFAULT_PICTURE, DEFAULT_STATUS } = process.env;

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
    picture: picture || DEFAULT_PICTURE,
    status: status || DEFAULT_STATUS,
    password,
  }).save();
  return user;
};

exports.getUser = async (userID) => {
  const user = await userModel.findById(userID);
  if (!user) {
    throw createHttpError.NotFound(
      "Please try again with a different ID, this ID not found."
    );
  }
  return user;
};
