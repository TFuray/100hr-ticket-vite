const mongoose = require('mongoose')

const tableSchema = mongoose.Schema({
  table: Number,
  seats: Number,
  open: {
    type: Boolean,
    default: true
  }, 
})

module.exports = mongoose.model('Table', tableSchema)