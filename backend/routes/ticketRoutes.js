const express = require('express')

const router = express.Router()
const {
  getTickets,
  setTickets,
  completeTicket,
  deleteTicket
} = require('../controllers/ticketController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getTickets).post(protect, setTickets)
router.route('/:id').put(protect, completeTicket).delete(protect, deleteTicket)


module.exports = router
