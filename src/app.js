// Dotenv Config
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const createHttpErrors = require("http-errors");
const routes = require("./routes/index");

// Create Express APP
const app = express();

// Morgan (Directory Log)
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

// Helmet (Securty For HTTP Response Headers)
app.use(helmet());

// JSON Parse Request Body
app.use(express.json());

// Sanitize Request Data
app.use(mongoSanitize());

// Enable Cookie Parser
app.use(cookieParser());

// Gzip Compression (Faster responses)
app.use(compression());

// File Upload
app.use(fileUpload({ useTempFiles: true }));

// Access to the server
app.use(cors());

// Routes
app.use("/api/prod", routes);

// Not Found
app.use(async (req, res, next) => {
  next(createHttpErrors.NotFound());
});

// HTTP Errors
app.use(async (err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

module.exports = app;
