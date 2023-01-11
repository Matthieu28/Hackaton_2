const router = require("express").Router();

const userControllers = require("../controllers/userControllers");

router.get("/", userControllers.browse);
router.get("/:id", userControllers.read);
router.put("/:id", userControllers.edit);
router.post("/", userControllers.add);
router.delete("/:id", userControllers.destroy);

router.post("/login", userControllers.login);

module.exports = router;
