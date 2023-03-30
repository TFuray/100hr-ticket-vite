import { useState, useEffect } from 'react'
import TableIcon from '../components/tableComps/TableIcon'
import tableData from '../data/tables'


const TableMapDRAFT = () => {
  const [tableList, setTableList] = useState(tableData)

  function handleToggleOpen(id) {
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
    <h2 className='text-center mb-12 text-3xl font-bold'>Coming Soon</h2>
      <div className='grid grid-flow-col grid-rows-5 gap-5 place-items-center'>
        {tableList.map(table => (
          <div
            className='table'
            key={table.table}
          // style={{
          //   backgroundColor: table.open
          //     ? 'rgb(54, 211, 153)'
          //     : 'rgb(248, 114, 114)'
          // }}
          >
            <TableIcon
              key={table.table}
              open={table.open}
              seats={table.seats}
              table={table.table}
              handleToggleOpen={handleToggleOpen}
            />
          </div>
        ))}
      </div>
      <div className=''>
      </div>
    </>
  )
}

export default TableMapDRAFT
