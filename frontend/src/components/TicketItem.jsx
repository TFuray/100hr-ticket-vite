import {
  deleteTicket,
  completeTicket,
  completedTicket,
} from '../features/tickets/ticketSlice'
import { useDispatch, useSelector } from 'react-redux'

const TicketItem = ({ ticket, user }) => {
  const dispatch = useDispatch()

  function renderButton () {
    if (ticket.status === 'Open') {
      return (
        <button
          className='btn btn-ghost'
          onClick={() => dispatch(completeTicket(ticket._id))}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-8'
            viewBox='0 0 384 512'
          >
            <path
              fill='green'
              d='M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z'
            />
          </svg>
        </button>
      )
    }
    if (ticket.status === 'inProgress') {
      return (
        <button
          className='btn btn-ghost'
          onClick={() => dispatch(completedTicket(ticket._id))}
        >
          <svg
            className='w-11'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path
              fill='green'
              d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
            />
          </svg>
        </button>
      )
    } else {
      return (
        <svg
          className='w-8'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 576 512'
        >
          <path
            aria-hidden='true'
            fill='yellow'
            d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'
          />
        </svg>
      )
    }
  }

  return (
    <div className='flex flex-col card bg-neutral text-neutral-content'>
      <div className='card-body items-center text-center'>
        <p className='text-sm'>
          {' '}
          - {new Date(ticket.createdAt).toLocaleString('en-US')}
        </p>

        <h2 className='card-title'>{ticket.title}</h2>
        <p>{ticket.description}</p>
        <div className='card-actions justify-end'>
          {renderButton()}
          {ticket.user == user._id ? (
            <button
              className='btn btn-ghost'
              onClick={() => dispatch(deleteTicket(ticket._id))}
            >
              <svg
                aria-hidden='true'
                className='w-6'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='rgb(71, 0, 0)'
                  d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'
                />
              </svg>
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
