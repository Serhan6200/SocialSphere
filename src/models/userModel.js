const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      minLength: [8, "Please make sure your name is atleast 6 characters long"],
      maxLength: [40, "Please make sure your name less tan 40 characters long"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: [true, "This email already exist"],
      lowercase: true,
      match: [
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        "Please enter a valid email",
      ],
    },
    picture: {
      type: String,
      default:
        "https://res.cloudinary.com/dkd5jblv5/image/upload/v1675976806/Default_ProfilePicture_gjngnb.png",
    },
    status: {
      type: String,
      default: "Kuantum Siber Güvenlik SocialSphere",
      maxLength: [
        128,
        "Please make sure your status less tan 128 characters long",
      ],
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
      minLength: [
        8,
        "Please make sure your password is atleast 8 characters long",
      ],
      maxLength: [
        40,
        "Please make sure your password less tan 40 characters long",
      ],
    },
  },
  {
    timestamp: true,
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
