import axios from 'axios'

const API_URL = '/api/tickets/'

// Create new Ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, ticketData, config)

  return response.data
}

// Get user tickets
const getTickets = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user ticket
const deleteTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + ticketId, config)

  return response.data
}

// Mark complete user ticket
const completeTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.put(API_URL + '/complete/'+ ticketId, config)

  return response.data
}

const completedTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.put(API_URL + "/completed/"+ ticketId, config)

  return response.data
}

const ticketService = {
  createTicket,
  getTickets,
  deleteTicket,
  completedTicket,
  completeTicket
}

export default ticketService
