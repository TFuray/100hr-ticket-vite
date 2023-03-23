import {
  deleteTicket,
  completeTicket,
  completedTicket,
} from "../../features/tickets/ticketSlice"
import { useDispatch, useSelector } from "react-redux"

const SampleTicket = ({ ticket, user }) => {
  const dispatch = useDispatch()
  function renderButton() {
    if (ticket.status === "Open") {
      return (
        <button
          onClick={() => dispatch(completeTicket(ticket._id))}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Start Ticket
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )
    }
    if (ticket.status === "inProgress") {
      return (
        <button
          className="btn btn-ghost"
          onClick={() => dispatch(completedTicket(ticket._id))}
        ></button>
      )
    } else {
      return (
        <svg
          className="w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            aria-hidden="true"
            fill="yellow"
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          />
        </svg>
      )
    }
  }

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
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
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {ticket.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {ticket.description}
      </p>
      {renderButton()}
    </div>
  )
}

export default SampleTicket
