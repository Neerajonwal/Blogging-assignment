const BlogPost = require("../models/BlogPost");

// create Blog method
const createBlogPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const author = req.user.id;
        const blogPost = new BlogPost({
            title, author, content
        })
        await blogPost.save();
        res.status(201).send({ message: 'Blog post created successfully' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: 'Blog post creation failed' });
    }
}
// get blog method 
const getBlogPost = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find().populate('author', 'email')
        // const blogPosts = await BlogPost.find()
        res.status(200).send(blogPosts);
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ error: 'Failed to retrieve blog posts' });
    }

}
// Delete Blog Method 
const deleteBlogPost = async (req, res) => {
    try {
        const postId = req.params.postId;
        await BlogPost.findByIdAndRemove(postId);
        res.status(200).send({ message: 'Blog post deleted successfully' });
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: 'Failed to delete blog post' });
    }
}

module.exports = {
    createBlogPost, deleteBlogPost, getBlogPost
}