/* eslint-disable no-unused-vars */
import { useEffect, useState, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import UpdateTicketForm from "../components/ticketComps/UpdateTicketForm"
import TicketItem from "../components/ticketComps/TicketItem"
import SampleTicket from "../components/ticketComps/SampleTicket"
import PageHeading from "../components/generalComps/PageHeading"
import AddButton from "../components/ticketComps/AddButton"
import Spinner from "../components/generalComps/Spinner"
import { getTickets, reset } from "../features/tickets/ticketSlice"

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { tickets, isLoading, isError, message } = useSelector(
    (state) => state.tickets
  )
  const [isOpen, setIsOpen] = useState(false)
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

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

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
      <PageHeading pageTitle="Side Work Dashboard" />
      <section className="flex w-3/4 justify-end">
        <div className="inset-0 flex items-center justify-end">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black outline outline-green-600 hover:outline-green-700 focus:outline-green-700 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Add Ticket
          </button>
        </div>

        <Transition
          appear
          show={isOpen}
          as={Fragment}
        >
          <Dialog
            as="div"
            className="relative z-10"
            onClose={closeModal}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-3/5 transform overflow-hidden rounded-2xl bg-neutral p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    ></Dialog.Title>
                    <UpdateTicketForm />

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>

      <h2 className="flex justify-center text-3xl m-5">
        <button
          className={
            flip ? "btn btn-active btn-primary" : "btn btn-outline btn-primary"
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
          className={
            !flip ? "btn btn-active btn-accent" : "btn btn-outline btn-accent"
          }
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
                <span className="text-blue-600 dark:text-red-600">
                  Completed
                </span>
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
                <div className="goals flex gap-3 flex-col">
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
                <div className="goals flex gap-3 flex-col">
                  {inProgressTicketsBack.map((ticket) => (
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
              <h2 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
                Side Work:{" "}
                <span className="text-blue-600 dark:text-red-600">
                  Completed
                </span>
              </h2>
              {completedTicketsBack.length > 0 ? (
                <div className="goals flex gap-3 flex-col">
                  {completedTicketsBack.map((ticket) => (
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
      )}
    </>
  )
}

export default Dashboard
