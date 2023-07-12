const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const fileUpload = require("express-fileupload");
const cors = require("cors");

// Dotenv Config
dotenv.config();

// Create Express APP
const app = express();

// Morgan (Directory Log)
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Helmet (Little Securty Touch For HTTP Response Headers)
app.use(helmet());

// JSON Parse Request Body
app.use(express.json());

// Sanitize Request Data
app.use(mongoSanitize());

// Enable Cookie Parser
app.use(cookieParser());

// Gzip Compression (Make it faster responses)
app.use(compression());

// File Upload
app.use(fileUpload({ useTempFiles: true }));

// Access to the server
app.use(cors());

app.post("/", (req, res) => {
  //res.json({ message: "Hebeles Huebele..." });
  res.json(req.body);
});

module.exports = app;
