import { useState, useEffect } from 'react'
import TableIcon from '../components/TableIcon'
import tableData from '../data/tables'

const TableMap = () => {
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
      <h1></h1>
      <h1 className='text-5xl mb-9'>Table Map</h1>
      <div className='grid grid-rows-5 grid-flow-col gap-4 place-items-center'>
        {tableList.map(table => (
          <div
            style={
              ({ backgroundColor: table.open ? 'green' : 'red' },
              { borderRadius: '5px' })
            }
          >
            <TableIcon
              key={table.table}
              open={table.open}
              seats={table.seats}
              table={table.table}
            />
            <button
              className='btn'
              // style={{ backgroundColor: table.open ? 'green' : 'red' }}
              onClick={() => handleToggleOpen(table.table)}
            >
              {table.open ? 'Set Closed' : 'Set Open'}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default TableMap
