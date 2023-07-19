const yup = require("yup");

exports.createUser = yup.object({
  body: yup.object({
    name: yup.string().required().min(8).max(40).label("Name"),
    email: yup.string().email().required().label("Email"),
    picture: yup.string().label("Picture"),
    status: yup.string().label("Status"),
    password: yup.string().required().min(8).max(40).label("Password"),
  }),
});
