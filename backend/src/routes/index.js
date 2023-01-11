const router = require("express").Router();

const makeRoutes = require("./make.routes");
const vehicleRoutes = require("./vehicle.routes");
const userRoutes = require("./user.routes");

router.use("/makes", makeRoutes);
router.use("/vehicles", vehicleRoutes);
router.use("/users", userRoutes);

module.exports = router;
