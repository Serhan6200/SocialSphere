const dotenv = require("dotenv");
const app = require("./app");

// Dotenv Config
dotenv.config();

// ENV Variables
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
