const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const Post = require("../models/Post");

const router = express.Router();

router.post("/student", authController.register);
router.post("/login", authController.login);
router.get("/posts", authController.posts);
router.post("/updates", authController.updates);

module.exports = router;
