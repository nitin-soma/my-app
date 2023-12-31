require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_SECRET = process.env.JWT_SECRET;
const User = require("../models/User");
const Post = require("../models/Post");

const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, role });
    await User.insertMany([user]);
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email }).exec();
    if (!foundUser) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const rolesArray = Object.values(foundUser.role).filter(String);
    const roles = rolesArray.join("");
    const token = jwt.sign(
      { id: foundUser._id, role: foundUser.role },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    foundUser.token = token;
    await foundUser.save();
    res.cookie("jwt", token, {
      domain: "localhost:3000",
      httpOnly: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
    });
    res.json({ roles, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const posts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updates = async (req, res) => {
  const { user, content } = req.body;
  const foundUser = await User.findOne({ email: user }).exec();
  const userId = foundUser._id;
  const userRole = foundUser.role;

  if (userRole !== "admin") {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    const newPost = new Post({ user: userId, content });
    await Post.insertMany([newPost]);
    await newPost.save();

    res.json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const users = async (req, res) => {
  try {
    const userId = req.params._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Customize the response based on your needs, for example, sending only necessary user data
    const userData = {
      email: user.email,
      role: user.role,
      // Add other fields you want to include
    };

    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { register, login, posts, updates, users };
