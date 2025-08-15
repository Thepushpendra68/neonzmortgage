const mongoose = require('mongoose');

const {Schema} = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    short_des: {
        type: String
    },
    content: {
        type: String
    },
    image: {
        type: String
    },
    meta_title: {
        type: String
    },
    alt_text: {
        type: String
    }
}, {
    timestamps: true
})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;