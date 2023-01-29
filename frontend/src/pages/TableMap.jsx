import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../components/Table'
import { getTables } from '../features/tables/tableSlice'


const TableMap = () => {
  const [tableList, setTableList] = useState(tableData)
  const [open, setOpen] = useState(true) 
  function handleClick(key) {
    setTableList(...tableList, tableList.key(setOpen(!open))
 ) 
  }


  return (
    <div>
      <div className='grid grid-rows-5 grid-flow-col gap-4'>
        {tableList.map(table => {
          return (
            <div>
              <Table
                key={table.table}
                table={table.table}
                seats={table.seats}
                open={open}
                handleClick={handleClick}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TableMap
