const mongoose = require('mongoose')

const tableSchema = mongoose.Schema({
  table: Number,
  seats: Number,
  open: true
})

module.exports = mongoose.model('Table', tableSchema)