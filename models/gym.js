const mongoose = require('mongoose')

// Make a Schema
const gymSchema = new mongoose.Schema({
  membership: { type: String, required: true },
  price: { type: String, required: true },
  imageOne: { type: String },
  imageTwo: { type: String },
  p1: { type: String },
  p2: { type: String },
  p3: { type: String },
  p4: { type: String },
  p5: { type: String }
})

// Make a Model for the Schema
const Gym = mongoose.model('Gym', gymSchema)

// Export
module.exports = Gym
