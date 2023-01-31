const asyncHandler = require('express-async-handler')
const Table = require('../models/tableModel')

// @desc   Get Tables
//@Route   GET /api/tables
const getTables = asyncHandler(async (rec, res) => {
  const tables = await Table.find()
  res.status(200).json(tables)
})

// @desc    Toggle table open
// @route   PUT /api/tables/open/:id
const toggleOpen = asyncHandler(async (req, res) => {
  const table = await Table.findById(req.params.id)

  if (!table) {
    res.status(400)
    throw new Error('Table not found')
  }

  const updatedTable = await Table.findByIdAndUpdate(
    req.params.id,
    { open: true },
    { new: true }
  )
  res.status(200).json(updatedTable)
})

// @desc    Toggle table open
// @route   PUT /api/tables/closed/:id
const toggleClosed = asyncHandler(async (req, res) => {
  const table = await Table.findById(req.params.id)

  if (!table) {
    res.status(400)
    throw new Error('Table not found')
  }

  const updatedTable = await Table.findByIdAndUpdate(
    req.params.id,
    { open: false },
    { new: true }
  )
  res.status(200).json(updatedTable)
})

module.exports = {
  getTables,
  toggleOpen,
  toggleClosed
}
