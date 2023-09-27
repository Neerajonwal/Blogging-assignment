const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user")
const config = require("../config/config")

// Register a new user
const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword,
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Registration failed' });
    }
};

// Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Login failed' });
    }
};

module.exports = {
    login, register
}
