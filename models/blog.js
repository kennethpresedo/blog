const mongoose = require('mongoose')

// Make a Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  entry: { type: String, required: true },
  likes: { String }
})

// Make a Model for the Schema
const Blog = mongoose.model('Blog', blogSchema)

// Export
module.exports = Blog
