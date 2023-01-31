import axios from 'axios'
const API_URL = '/api/tables/'

// Get all Tables
const getTables = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)
  return response.data
}

// Toggle open
const toggleOpen = async (tableId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.put(API_URL + '/open/' + tableId, config)
  return response.data
}

// Toggle open
const toggleClosed = async (tableId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.put(API_URL + '/closed/' + tableId, config)
  return response.data
}

const tableService = {
  getTables,
  toggleOpen,
  toggleClosed
}

export default tableService
