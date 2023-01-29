const asyncHandler = require('express-async-handler')
const Table = require('../models/tableModel')

// @desc   Get Tables
//@Route   GET /api/tables
const getTables = asyncHandler(async (rec, res) =>{
  const tables = await Table.find()
  res.status(200).json(tables)
})

// @desc    Toggle table open
// @route   PUT /api/tables
const toggleOpen = asyncHandler(async (req, res) => {
  const table = await Table.findById(
    req.params.id,
    req.body,
      {open: false}
    )
})

module.exports = {
  getTables,
  toggleOpen
}