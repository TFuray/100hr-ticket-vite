const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: [true, "Please add Title"]
  },
  description: {
    type: String,
    required: [true, "Pleae add Description"]
  },
  project: {
    type: String,
  },
  assignedTo: {
    type: String,
    required: [true, "Anyone"],
    default: 'Anyone'
  },
  priority: {
    type: String 
  },
  status: {
    type: String,
    default: "Open"
  },
  type: {
  type: String
  },

}, {
  timestamps: true
})

module.exports = mongoose.model('Ticket', ticketSchema)