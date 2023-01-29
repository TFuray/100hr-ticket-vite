const express = require('express')
const router = express.Router()

const{
  getTables,
  toggleOpen
} = require('../controllers/tableController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTables)
router.route('/:id').put(toggleOpen)

module.exports = router