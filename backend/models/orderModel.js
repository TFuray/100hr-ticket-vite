const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  table: {
    type: String
  },
  seat: String,
  order: String,
  fire: {
    type: Boolean,
    default: false,
  },
  
}, {
    timestamps: true
})


module.exports = mongoose.model("Order", orderSchema)