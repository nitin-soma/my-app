const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const Post = require("../models/Post");

const router = express.Router();

router.post("/student", authController.register);
router.post("/login", authController.login);

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/posts", authMiddleware, async (req, res) => {
  const { content } = req.body;
  const userId = req.user._id;

  try {
    const newPost = new Post({ user: userId, content });
    await Post.insertMany([newPost]);
    await newPost.save();

    res.json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
