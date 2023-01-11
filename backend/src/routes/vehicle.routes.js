const router = require("express").Router();

const vehicleControllers = require("../controllers/vehicleControllers");

router.get("/", vehicleControllers.browse);
router.get("/:id", vehicleControllers.read);
router.put("/:id", vehicleControllers.edit);
router.post("/", vehicleControllers.add);
router.delete("/:id", vehicleControllers.destroy);

module.exports = router;
