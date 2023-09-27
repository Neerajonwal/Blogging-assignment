const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog");
const { checkAuth, checkAdmin } = require("../middleware/auth")


// Create a Blog 
router.post("/create", checkAuth, blogController.createBlogPost);

// Get All blogs By admin only
router.get("/all",checkAdmin, blogController.getBlogPost);

// Delete One Blog by Admin Only
router.delete("/:postId", checkAuth, checkAdmin, blogController.deleteBlogPost)

module.exports = router