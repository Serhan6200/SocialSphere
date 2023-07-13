const app = require("./app");
const logger = require("./configs/logger");
const mongoose = require("mongoose");

// ENV Variables
const PORT = process.env.PORT;
let server;

// Handle Database Errors
mongoose.connection.on("error", (err) => {
  logger.error(`Database error ${err}`);
  process.exit(1);
});

// Debug Database Mode
if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true);
}

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Database connected");
  });

server = app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

// Exit Process
const exitHandler = () => {
  if (server) {
    logger.info("Server closed");
    process.exit(1);
  } else {
    process.exit(1);
  }
};

// Handle Server Errors
const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

// Handle SIGTERM (Signal terminate : Close server before app crash)
process.on("SIGTERM", unexpectedErrorHandler);
