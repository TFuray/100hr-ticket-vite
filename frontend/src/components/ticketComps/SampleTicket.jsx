import {
  deleteTicket,
  completeTicket,
  completedTicket,
  reset,
} from "../../features/tickets/ticketSlice"
import { useDispatch, useSelector } from "react-redux"

const SampleTicket = ({ ticket, user }) => {
  const dispatch = useDispatch()

  const onClick = () => {
    if (ticket.status == "Open") {
      dispatch(completeTicket(ticket._id))
      dispatch(reset)
    } else if (ticket.status == "inProgress") {
      dispatch(completedTicket(ticket._id))
    }
  }

  function renderButton() {
    if (ticket.status === "Open") {
      return (
        <button
          onClick={onClick}
          className="inline-flex items-center px-3 py-2 text-md text-lg font-bold text-center text-black bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-400 "
        >
          Start
        </button>
      )
    }
    if (ticket.status === "inProgress") {
      return (
        <button
          className="inline-flex items-center px-3  py-2 text-md font-bold text-lg text-center text-black bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-300 "
          onClick={onClick}
        >
          Finshed
        </button>
      )
    }
    if (ticket.status === "completed") {
      return (
        <button className="inline-flex items-center px-3  py-2 text-md font-bold text-lg text-center text-black bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-300 ">
          Complete
        </button>
      )
    }
  }

  function deleteButton() {
    null
  }

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-primary dark:border-gray-700">
      <div>
        {ticket.user == user._id ? (
          <button
            className="float-right border-2 border-red-600 rounded-full"
            onClick={() => dispatch(deleteTicket(ticket._id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="red"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <></>
        )}
      </div>
      {ticket.status == "completed" ? (
        <div>
          <div className="line-through decoration-red-600 decoration-2 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {ticket.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-primary-content">
              {ticket.description}
            </p>
          </div>
          {renderButton()}
        </div>
      ) : (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {ticket.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-primary-content">
            {ticket.description}
          </p>
          {renderButton()}
        </>
      )}
    </div>
  )
}

export default SampleTicket
