const router = require("express").Router();
const interestsController = require("../../controllers/interestsController");

// Matches with "/api/interests"
router.route("/",)
  .get(interestsController.findAll)
  .post(interestsController.create);


// Matches with "/api/interests/:id"
router
  .get(interestsController.findById)
  .put(interestsController.update)
  .delete(interestsController.remove);

module.exports = router;
