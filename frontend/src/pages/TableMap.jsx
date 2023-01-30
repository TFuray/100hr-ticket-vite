import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TableIcon from '../components/TableIcon'
import { getTables, toggleOpen } from '../features/tables/tableSlice'
import Spinner from '../components/Spinner'
import { reset } from '../features/auth/authSlice'

const TableMap = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { tables, isLoading, isError, message } = useSelector(
    state => state.tables
  )

  // const []

  useEffect(() => {
    if (isError) {
      console.log(message)
    } else {
      dispatch(getTables())
    }
    return () => {
      dispatch(reset())
    }
  }, [navigate, isError, message, dispatch])

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
            table={table.table} 
            seats={table.seats}
           />
        ))}
      </div>
    </>
  )
}

export default TableMap
