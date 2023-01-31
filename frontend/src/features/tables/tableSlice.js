import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import tableService from './tableService'

const initialState = {
  tables: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Get All Tables
export const getTables = createAsyncThunk(
  'tables/getTables',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tableService.getTables(token)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// toggle open table
export const toggleOpen = createAsyncThunk(
  'table/toggleOpen',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tableService.toggleOpen(id, token)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// toggle close table
export const toggleClosed = createAsyncThunk(
  'table/toggleClosed',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tableService.toggleOpen(id, token)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    reset: state => initialState
  },
  extraReducers: builder => {
    builder
      .addCase(getTables.pending, state => {
        state.isLoading = true
      })
      .addCase(getTables.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tables = action.payload
      })
      .addCase(getTables.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(toggleOpen.pending, state => {
        state.isLoading = true
      })
      .addCase(toggleOpen.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        // state.tables = [...state.tables, action.payload]
        state.tables = state.tables.filter(
          table => table._id !== action.payload.id
        )
      })
      .addCase(toggleOpen.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(toggleClosed.pending, state => {
        state.isLoading = true
      })
      .addCase(toggleClosed.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        // state.tables = [...state.tables, action.payload]
        state.tables = state.tables.filter(
          table => table._id !== action.payload.id
        )
      })
      .addCase(toggleClosed.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = tableSlice.actions
export default tableSlice.reducer
