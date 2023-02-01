import { useDispatch } from 'react-redux'
import { toggleOpen, toggleClosed, reset } from '../features/tables/tableSlice'

const Table = ({ table, seats, _id, open }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    if (open) {
      dispatch(toggleClosed(_id))
    } else {
      dispatch(toggleOpen(_id))
    }
    return () => {
      dispatch(reset())
    }
  }

  return (
    <div
      className='table content-center'
      style={{ backgroundColor: open ? 'green' : 'red' }}
      onClick={handleClick}
    >
      <h3 className='text-3xl'>{table} </h3>
      <div>Seats: {seats}</div>
    </div>
  )
}

export default Table
