const mongoose = require('mongoose')

// Make a Schema
const gymSchema = new mongoose.Schema({
  title: { type: String, required: true },
  entry: { type: String, required: true },
  likes: { String }
})

// Make a Model for the Schema
const Gym = mongoose.model('Gym', gymSchema)

// Export
module.exports = Gym
