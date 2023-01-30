import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../components/Table'
import { getTables } from '../features/tables/tableSlice'
import Spinner from '../components/Spinner'
import { reset } from '../features/auth/authSlice'

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
    } else {
      dispatch(getTables())
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
      <h1>{user && user.name}</h1>
      <h1>tables</h1>
      {tables.length > 0 ? (
        <div className='grid grid-rows-5 grid-flow-col gap-4'>
          {tables.map(table => (
            <Table key={table.table} />
          ))}
        </div>
      ) : (
        <h3>No Tables to Show</h3>
      )}
    </>
  )
}

export default TableMap
