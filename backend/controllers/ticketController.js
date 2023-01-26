const asyncHandler = require('express-async-handler')
const Ticket = require('../models/ticketModel')
// const User = require('../models/userModel')

// @desc    Get tickets
// @route   GET /api/tickets
const getTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find()
  // const users = await User.find()

  // const tickets = await Ticket.find({ user: req.user.id })
  // console.log(users)

  res.status(200).json(tickets)
})


// @desc    Set tickets
// @route   POST /api/tickets
const setTickets = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description) {
    res.status(400)

    throw new Error('Please add Title and Descriptoin')
  }

  const ticket = await Ticket.create({
    user: req.user.id,
    assignedTo: req.body.assignedTo,
    description: req.body.description,
    priority: req.body.priority,
    project: req.body.project,
    title: req.body.title,
    type: req.body.type
  })

  res.status(200).json(ticket)
})

// @desc    Update tickets
// @route   Put /api/tickets/:id
const updateTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(400)
    throw new Error('Ticket not found')
  }

  //check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure logged in user matches ticket user
  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedTicket)
})

// @desc    Delete tickets
// @route   DELETE /api/tickets/:id
const deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(400)
    throw new Error('Ticket not found')
  }

  //check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure logged in user matches ticket user
  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await ticket.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTickets,
  setTickets,
  updateTicket,
  deleteTicket
}
