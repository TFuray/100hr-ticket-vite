/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import TicketForm from "../components/ticketComps/TicketForm"
import TicketTable from "../components/ticketComps/TicketTable"
import UpdateTicketForm from "../components/ticketComps/UpdateTicketForm"
import TicketItem from "../components/ticketComps/TicketItem"
import SampleTicket from "../components/ticketComps/SampleTicket"
import PageHeading from "../components/generalComps/PageHeading"
import AddButton from "../components/ticketComps/AddButton"
import Spinner from "../components/generalComps/Spinner"
import { getTickets, reset } from "../features/tickets/ticketSlice"
// import { reset } from '../features/auth/authSlice'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { tickets, isLoading, isError, message } = useSelector(
    (state) => state.tickets
  )

  const [showTicketForm, setShowTicketForm] = useState(false)
  const [flip, setFlip] = useState(true)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate("/login")
    } else {
      dispatch(getTickets())
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  const showFront = () => setFlip(true)
  const showBack = () => setFlip(false)

  const openTickets = tickets.filter(function (ticket) {
    return ticket.status === "Open" && ticket.assignedTo === "frontOfHouse"
  })

  const inProgressTickets = tickets.filter(function (ticket) {
    return (
      ticket.status === "inProgress" && ticket.assignedTo === "frontOfHouse"
    )
  })

  const completedTickets = tickets.filter(function (ticket) {
    return ticket.status === "completed" && ticket.assignedTo === "frontOfHouse"
  })

  const openTicketsBack = tickets.filter(function (ticket) {
    return ticket.status === "Open" && ticket.assignedTo === "backOfHouse"
  })

  const inProgressTicketsBack = tickets.filter(function (ticket) {
    return ticket.status === "inProgress" && ticket.assignedTo === "backOfHouse"
  })

  const completedTicketsBack = tickets.filter(function (ticket) {
    return ticket.status === "completed" && ticket.assignedTo === "backOfHouse"
  })

  return (
    <>
      {/* <AddButton
          color={showTicketForm ? 'red' : 'green'}
          text={showTicketForm ? 'Close' : 'Add Ticket'}
          onClick={() => setShowTicketForm(!showTicketForm)}
        />  */}
      <PageHeading pageTitle="Side Work Dashboard" />
      <section className="flex justify-center">
        <div className="collapse">
          <input
            type="checkbox"
            onClick={() => setShowTicketForm(!showTicketForm)}
          />
          <div className="collapse-title text-xl font-medium justify-end flex">
            {/* {showTicketForm ? "Add Ticket" : "Close"} */}
            <AddButton
              showTicketForm={showTicketForm}
              text={showTicketForm ? "Close" : "Add Ticket"}
              onClick={() => setShowTicketForm(!showTicketForm)}
            />
          </div>
          <div className="collapse-content">
            <UpdateTicketForm />
          </div>
        </div>
      </section>

      <h2 className="flex justify-center text-3xl m-5">
        <button
          className={
            flip
              ? "btn btn-active btn-info"
              : "btn btn-outline btn-info"
          }
          onClick={showFront}
        >
          Front Of House
        </button>{" "}
        <div
          className="flex"
          style={{ width: "100px" }}
        ></div>
        <button
          className={!flip ? "btn btn-accent" : "btn btn-outline btn-accent"}
          onClick={showBack}
        >
          Back Of House
        </button>
      </h2>

      {flip ? (
        <section className="frontHouse">
          <div className="flex justify-around">
            <section className="flex flex-col w-80  ">
              <h2 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
                Side Work: <br></br>
                <span className="text-green-500">Open</span>
              </h2>
              {openTickets.length > 0 ? (
                <div className="goals flex flex-col gap-3">
                  {openTickets.map((ticket) => (
                    <SampleTicket
                      key={ticket._id}
                      ticket={ticket}
                      user={user}
                    />
                  ))}
                </div>
              ) : (
                <h3 className="flex justify-center">No Open Tickets</h3>
              )}
            </section>
            <div className="divider lg:divider-horizontal"></div>
            <section className="flex flex-col w-80 ">
              <h2 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
                Side Work: <br></br>
                <span className="text-blue-600 dark:text-yellow-600">
                  In Progress
                </span>
              </h2>
              {inProgressTickets.length > 0 ? (
                <div className="goals flex gap-3 flex-col">
                  {inProgressTickets.map((ticket) => (
                    <SampleTicket
                      key={ticket._id}
                      ticket={ticket}
                      user={user}
                    />
                  ))}
                </div>
              ) : (
                <h3 className="flex justify-center">No In-Progress Tickets</h3>
              )}
            </section>
            <div className="divider lg:divider-horizontal"></div>
            <section className="flex flex-col w-80 ">
              <h2 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
                Side Work:{" "}
                <span className="text-blue-600 dark:text-red-600">Completed</span>
              </h2>
              {completedTickets.length > 0 ? (
                <div className="goals flex gap-3 flex-col">
                  {completedTickets.map((ticket) => (
                    <SampleTicket
                      key={ticket._id}
                      ticket={ticket}
                      user={user}
                    />
                  ))}
                </div>
              ) : (
                <h3 className="flex justify-center">No Completed Tickets</h3>
              )}
            </section>
          </div>
        </section>
      ) : (
        <section className="backHouse">
          <div className="flex justify-around">
            <section className="flex flex-col w-80 ">
              <h2 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
                Side Work: <br></br>
                <span className="text-blue-600 dark:text-green-500">Open</span>
              </h2>
              {openTicketsBack.length > 0 ? (
                <div className="goals flex flex-col">
                  {openTicketsBack.map((ticket) => (
                    <SampleTicket
                      key={ticket._id}
                      ticket={ticket}
                      user={user}
                    />
                  ))}
                </div>
              ) : (
                <h3 className="flex justify-center">No Open Tickets</h3>
              )}
            </section>
            <div className="divider lg:divider-horizontal"></div>
            <section className="flex flex-col w-80">
              <h2 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
                Side Work: <br></br>
                <span className="text-blue-600 dark:text-yellow-500">
                  In Progress
                </span>
              </h2>
              {inProgressTicketsBack.length > 0 ? (
                <div className="goals flex flex-col">
                  {inProgressTicketsBack.map((ticket) => (
                    <TicketItem
                      key={ticket._id}
                      ticket={ticket}
                      user={user}
                    />
                  ))}
                </div>
              ) : (
                <h3 className="flex justify-center">No In-Progress Tickets</h3>
              )}
            </section>
            <div className="divider lg:divider-horizontal"></div>
            <section className="flex flex-col w-80 ">
              <h2 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
                Side Work:{" "}
                <span className="text-blue-600 dark:text-red-600">Completed</span>
              </h2>
              {completedTicketsBack.length > 0 ? (
                <div className="goals flex flex-col">
                  {completedTicketsBack.map((ticket) => (
                    <TicketItem
                      key={ticket._id}
                      ticket={ticket}
                      user={user}
                    />
                  ))}
                </div>
              ) : (
                <h3 className="flex justify-center">No Completed Tickets</h3>
              )}
            </section>
          </div>
        </section>
      )}
    </>
  )
}

export default Dashboard
