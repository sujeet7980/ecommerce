const express = require("express");
const {
  authcontroller,
  getProfileDetails,
  registerUser,
  userUpdateDetails,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMIddleware");
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authcontroller);
router
  .route("/profile")
  .get(protect, getProfileDetails)
  .put(protect, userUpdateDetails);
module.exports = router;
