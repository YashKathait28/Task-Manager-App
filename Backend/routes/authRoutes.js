const express = require("express");
const { userRegister, userLogin, userLogout  } = require("../controllers/authControllers");

const router = express.Router();

// Register API
router.post("/register", userRegister);
// Login API
router.post("/login", userLogin);
// Logout API
router.post("/logout", userLogout);
// All-Users API
// router.get("/users", allUsers);

module.exports = router;    