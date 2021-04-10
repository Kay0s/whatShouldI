const router = require("express").Router();
const userRoutes = require("./users");
const interestRoutes = require("./intereststs");

// user routes
router.use("/users", userRoutes);

// interest routes
router.use("/interests", interestRoutes);

module.exports = router;
