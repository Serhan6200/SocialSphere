const express = require("express");
const authRoutes = require("./authRoute");
const userRoutes = require("./userRoute");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
