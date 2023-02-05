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

router.route('/').get(getTickets).post(protect, setTickets)
router.route('/complete/:id').put(completeTicket).delete(protect, deleteTicket)
router.route('/completed/:id').put(completedTicket)

module.exports = router
