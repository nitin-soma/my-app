// const jwt = require("jsonwebtoken");
// require("dotenv").config();
// const { JWT_SECRET } = process.env.JWT_SECRET;

// const authenticateJWT = (req, res, next) => {
//   const token = req.header("Authorization");

//   if (!token) {
//     return res.status(403).json({ message: "Unauthorized" });
//   }

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.sendStatus(403);
//     }

//     req.user = user;
//     next();
//   });
// };

// module.exports = authenticateJWT;
