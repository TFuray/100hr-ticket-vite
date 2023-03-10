const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: [true, 'Please add Title']
    },
    description: {
      type: String,
      required: [true, 'Pleae add Description']
    },
    assignedTo: {
      type: String
    },
    priority: {
      type: String
    },
    status: {
      type: String,
      default: 'Open'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)
