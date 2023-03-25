import {
  deleteTicket,
  completeTicket,
  completedTicket,
} from "../../features/tickets/ticketSlice"
import { useDispatch, useSelector } from "react-redux"

const TicketItem = ({ ticket, user }) => {
  const dispatch = useDispatch()

  function renderButton() {
    if (ticket.status === "Open") {
      return (
        <button
          className="btn btn-ghost"
          onClick={() => dispatch(completeTicket(ticket._id))}
        ></button>
      )
    }
    if (ticket.status === "inProgress") {
      return (
        <button
          className="btn btn-ghost"
          onClick={() => dispatch(completedTicket(ticket._id))}
        ></button>
      )
    }
  }

  return (
    <div className="">
    
    </div>
  )
}

export default TicketItem
