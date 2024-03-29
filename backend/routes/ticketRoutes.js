const express = require('express')

const router = express.Router()
const {
  getTickets,
  setTickets,
  completeTicket,
  completedTicket,
  deleteTicket
} = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTickets).post(protect, setTickets)
router.route('/:id').delete(protect, deleteTicket)
router.route('/complete/:id').put(completeTicket)
router.route('/completed/:id').put(completedTicket)

module.exports = router
