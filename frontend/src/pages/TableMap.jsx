import { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import TableIcon from '../components/TableIcon'
import tableData from '../data/tables'
import { useNavigate } from 'react-router-dom'

const TableMap = () => {
  const navigate = useNavigate()
  const {user} = useSelector(state => state.auth)
  const [tableList, setTableList] = useState(tableData)


  function handleToggleOpen (id) {
    const newList = tableList.map(item => {
      if (item.table === id) {
        const updatedItem = {
          ...item,
          open: !item.open
        }
        return updatedItem
      }
      return item
    })
    setTableList(newList)
  }

  return (
    <>
      <section className='heading'>
        <br />
        <h1>Welcome {user && user.name}</h1>
        <p className=''>Table Map</p>
      </section>
      <div className='grid grid-rows-5 grid-flow-col gap-8 place-items-center'>
        {tableList.map(table => (
          <div
            className='table'
            key={table.table}
            style={{
              backgroundColor: table.open
                ? 'rgb(54, 211, 153)'
                : 'rgb(248, 114, 114)'
            }}
          >
            <TableIcon
              key={table.table}
              open={table.open}
              seats={table.seats}
              table={table.table}
            />
            <div className='flex flex-col place-items-center '>
              <button className='custom-css btn ' style={{ width: '80%' }}>
                Manage Order
              </button>
              <button
                className={table.open ? 'btn btn-error' : 'btn btn-success'}
                onClick={() => handleToggleOpen(table.table)}
              >
                {table.open ? 'Mark Closed' : 'Set Open'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TableMap
