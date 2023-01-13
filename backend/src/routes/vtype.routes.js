const router = require("express").Router();

const vtypeControllers = require("../controllers/vtypeControllers");

router.get("/", vtypeControllers.browse);
router.get("/:id", vtypeControllers.read);
router.put("/:id", vtypeControllers.edit);
router.post("/", vtypeControllers.add);
router.delete("/:id", vtypeControllers.destroy);

module.exports = router;
