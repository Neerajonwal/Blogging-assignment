const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const { checkAuth } = require('../middleware/auth');

// Get user profile
router.get('/:userId', userController.getUserProfile);

// Edit user profile
router.patch('/edit/:userId', checkAuth, userController.editUserProfile);

module.exports = router;
