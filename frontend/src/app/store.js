import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import ticketReducer from '../features/tickets/ticketSlice'
import tableReducer from '../features/tables/tableSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
    tables: tableReducer
  }
})
