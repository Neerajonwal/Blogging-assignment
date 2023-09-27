const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require("../models/user");

// Middleware to verify JWT token and set user role
const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        const decoded = jwt.verify(token, config.jwtSecret);
        req.userData = decoded;

        const user = await User.findById(req.userData.userId)
        if (!user) {
            // console.log(err)
            return res.status(401).json({ error: 'Authentication failed' });
        }

        req.user = user;
        next();
    } catch (err) {
        console.log(err)
        return res.status(401).json({ error: 'Authentication failed' });
    }
}
// Middleware to check if the user is an Admin
const checkAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'Admin') {
        next();
    } else {
        res.status(403).json({ error: 'Permission denied' });
    }
};

module.exports = {
     checkAuth, checkAdmin
}
