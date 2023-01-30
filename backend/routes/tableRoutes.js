const express = require('express')
const router = express.Router()

const{
  getTables,
  toggleOpen
} = require('../controllers/tableController')

router.route('/').get( getTables)
router.route('/:id').put(toggleOpen)

module.exports = router