import { deleteTicket, completeTicket } from '../features/tickets/ticketSlice'
import { useDispatch } from 'react-redux'

const TicketItem = ({ ticket, user }) => {
  const dispatch = useDispatch()

  return (
    <div className='card w-96 bg-neutral text-neutral-content'>
      <div className='card-body items-center text-center'>
        <p className='text-xs'>
          {' '}
          - {new Date(ticket.createdAt).toLocaleString('en-US')}
        </p>

        <h2 className='card-title'>{ticket.title}</h2>
        <p>{ticket.description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={() => dispatch(completeTicket(ticket._id))}>Completed</button>
          {ticket.user == user._id ? (
            <button
              className='btn btn-ghost'
              onClick={() => dispatch(deleteTicket(ticket._id))}
            >
              Delete
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

export default TicketItem
