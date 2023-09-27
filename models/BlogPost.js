const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: String, required: true
    },
    timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model("BlogPost", BlogPostSchema);