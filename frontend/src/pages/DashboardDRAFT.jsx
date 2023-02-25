/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TicketForm from '../components/ticketComps/TicketForm'
import TicketItem from '../components/ticketComps/TicketItem'
import PageHeading from '../components/PageHeading'
import AddButton from '../components/ticketComps/AddButton'
import Spinner from '../components/Spinner'
import { getTickets, reset } from '../features/tickets/ticketSlice'
// import { reset } from '../features/auth/authSlice'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { tickets, isLoading, isError, message } = useSelector(
    state => state.tickets
  )

  const [showTicketForm, setShowTicketForm] = useState(false)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
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

  return (
    <>

    </>
  )
}

export default Dashboard
