import {
  deleteTicket,
  completeTicket,
  completedTicket,
} from '../../features/tickets/ticketSlice'
import { useDispatch, useSelector } from 'react-redux'

const SampleTicket = ({ ticket, user }) => {
  return (
    <div className="w-full max-w-xs p-6 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center justify-start flex-grow w-full">
          
          <div className="flex flex-col items-start ml-4">
            <span className="text-gray-700 dark:text-white">
              {ticket.title}
            </span>
            <span className="text-sm font-light text-gray-400 dark:text-gray-300">
              {new Date(ticket.createdAt).toLocaleString('en-US')}
            </span>
          </div>
        </div>
        <div className="flex-none hidden md:block ">
          <span className="w-full px-3 py-1 text-sm text-white bg-blue-500 rounded-full">
           {ticket.status} 
          </span>
        </div>
      </div>
      
      <p className="text-sm font-normal text-gray-400">
        {ticket.description}
      </p>
  
      <button type="button" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        Apply for this Job
      </button>
    </div>
  )
}


export default SampleTicket