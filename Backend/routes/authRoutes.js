const express = require("express");
const { userRegister, userLogin, userLogout, authProtectedRoute  } = require("../controllers/authControllers");

const router = express.Router();

// Register API
router.post("/register", userRegister);
// Login API
router.post("/login", userLogin);
// Logout API
router.post("/logout", userLogout);
// Auth Protected Route
router.get("/check-auth", authProtectedRoute);
// All-Users API
// router.get("/users", allUsers);

module.exports = router;    