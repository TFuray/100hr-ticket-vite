const express = require('express')
const router = express.Router()

const{
  getTables,
  toggleOpen,
  toggleClosed
} = require('../controllers/tableController')

router.route('/').get( getTables)
router.route('/open/:id').put(toggleOpen)
router.route('/closed/:id').put(toggleClosed)

module.exports = router