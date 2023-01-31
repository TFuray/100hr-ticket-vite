import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TableIcon from '../components/TableIcon'
import {
  getTables,
  toggleOpen,
  toggleClosed,
  reset
} from '../features/tables/tableSlice'
import Spinner from '../components/Spinner'

const TableMap = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { tables, isLoading, isError, message } = useSelector(
    state => state.tables
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }

    dispatch(getTables())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h1></h1>
      <h1 className='text-5xl mb-9'>Table Map</h1>
      <div className='grid grid-rows-5 grid-flow-col gap-4 place-items-center'>
        {tables.map(table => (
          <TableIcon
            key={table._id}
            open={table.open}
            table={table.table}
            seats={table.seats}
            _id={table._id}
          />
        ))}
      </div>
    </>
  )
}

export default TableMap
