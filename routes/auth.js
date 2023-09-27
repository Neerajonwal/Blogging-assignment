const express = require("express");
const router = express.Router();
const authController = require("../controller/auth")

// Register a new user   or Admin
router.post('/register', authController.register);

// Login
router.post('/login', authController.login);

module.exports = router;