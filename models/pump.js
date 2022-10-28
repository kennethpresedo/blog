const mongoose = require('mongoose')

// Make a Schema
const pumpSchema = new mongoose.Schema({
  qrCode: { type: String, required: true },

})

// Make a Model for the Schema
const Pump = mongoose.model('Pump', pumpSchema)

// Export
module.exports = Pump
