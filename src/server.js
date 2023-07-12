const app = require("./app");
const logger = require("./configs/logger");

// ENV Variables
const PORT = process.env.PORT;
let server;

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
