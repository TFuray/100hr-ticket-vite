const express = require('express')
const router = express.Router()

const{
  getTables,
  toggleOpen,
  toggleClosed
} = require('../controllers/tableController')

router.route('/').get( getTables)
router.route('/:id').put(toggleOpen).put(toggleClosed)

module.exports = router