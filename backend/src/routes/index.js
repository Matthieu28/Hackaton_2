const router = require("express").Router();

const makeRoutes = require("./make.routes");
const vehicleRoutes = require("./vehicle.routes");
const userRoutes = require("./user.routes");
const vtypeRoutes = require("./vtype.routes");

router.use("/makes", makeRoutes);
router.use("/vehicles", vehicleRoutes);
router.use("/users", userRoutes);
router.use("/vtypes", vtypeRoutes);

module.exports = router;
