const createHttpError = require("http-errors");
const { isValidObjectId } = require("mongoose");

exports.objectId = (value) => {
  if (isValidObjectId(value)) {
    return value;
  }
  throw createHttpError.NotFound(`${value} must be a valid ID`);
};
