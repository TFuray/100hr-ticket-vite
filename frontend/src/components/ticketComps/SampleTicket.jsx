import {
  deleteTicket,
  completeTicket,
  completedTicket,
  reset,
} from "../../features/tickets/ticketSlice"
import { useDispatch, useSelector } from "react-redux"

const SampleTicket = ({ ticket, user }) => {
  const dispatch = useDispatch()

  function renderButton() {
    if (ticket.status === "Open") {
      return (
        <button
          onClick={() => dispatch(completeTicket(ticket._id))}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
        >
          Start Ticket
        </button>
      )
    }
    if (ticket.status === "inProgress") {
      return (
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-300 "
          onClick={() => dispatch(completedTicket(ticket._id))}
        >
          Completed
        </button>
      )
    }
  }

  function deleteButton() {
    
  }

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-secondary dark:border-gray-700">
      <div>
        {/* {ticket.user == user._id ? (
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
        )} */}
      </div>
      {ticket.status == "completed" ? (
        <div className="line-through decoration-red-600 decoration-2 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {ticket.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {ticket.description}
          </p>
          {renderButton()}
        </div>
      ) :  <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {ticket.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-secondary-content">
            {ticket.description}
          </p>
          {renderButton()}
        </>}
    </div>
  )
}

export default SampleTicket
