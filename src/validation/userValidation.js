const yup = require("yup");
const { objectId } = require("./customValidation");

exports.createUser = yup.object({
  body: yup.object({
    name: yup.string().required().min(8).max(40).label("Name"),
    email: yup.string().email().required().label("Email"),
    picture: yup.string().label("Picture"),
    status: yup.string().max(128).label("Status"),
    password: yup.string().required().min(8).max(40).label("Password"),
  }),
});

exports.getUser = yup.object({
  params: yup.object({
    id: yup.string().required().transform(objectId).label("ID"),
  }),
});
