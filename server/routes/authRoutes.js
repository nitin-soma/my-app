const express = require("express");
const authController = require("../controllers/authController");
// const authenticateJWT = require("../middleware/auth");

const router = express.Router();

router.post("/student", authController.register);
router.post("/login", authController.login);

// Example protected route
// router.get("/protected", authenticateJWT, (req, res) => {
//   res.json({ message: "This is a protected route" });
// });

module.exports = router;
