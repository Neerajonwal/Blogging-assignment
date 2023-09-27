const User = require("../models/user")
const BlogPost = require("../models/BlogPost")
// Get user profile
const getUserProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        const userPosts = await BlogPost.find({ author: userId });

        res.status(200).json({ user, userPosts });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to retrieve user profile' });
    }
};

// Edit user profile
const editUserProfile = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Check if the user is editing their own profile
        if (req.userData.userId !== userId) {
            return res.status(403).json({ error: 'Permission denied' });
        }

        // Update user information
        await User.findByIdAndUpdate(userId, req.body);

        res.status(200).json({ message: 'User profile updated successfully' });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to update user profile' });
    }
};


module.exports = {
    getUserProfile, editUserProfile
}