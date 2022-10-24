const mongoose = require('mongoose')

// Make a Schema
const gymSchema = new mongoose.Schema({
  membership: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String }
})

// Make a Model for the Schema
const Gym = mongoose.model('Gym', gymSchema)

// Export
module.exports = Gym
