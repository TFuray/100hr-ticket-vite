import { deleteTicket } from '../features/tickets/ticketSlice'
import { useDispatch } from 'react-redux'

const TicketItem = ({ ticket }) => {
  const dispatch = useDispatch()

  return (
    <div className='card w-96 bg-neutral text-neutral-content'>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{ticket.title}</h2>
        <p>{ticket.description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Accept</button>
          <button
            className='btn btn-ghost'
            onClick={() => dispatch(deleteTicket(ticket._id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    // <div className='goal'>
    //   <div className='date'>
    //       - {new Date(ticket.createdAt).toLocaleString('en-US')}
    //   </div>
    //   <div>
    //     <h2>{ticket.title}</h2>
    //   </div>
    //   <div>
    //     <h5>Priority: { ticket.priority}</h5>
    //   </div>
    //   <div>
    //     <>Description: {ticket.description}</>
    //   </div>
    //   <div>
    //   </div>
    //   <button
    //
    //     className='close'
    //   >
    //     X
    //   </button>
    // </div>
  )
}

export default TicketItem
