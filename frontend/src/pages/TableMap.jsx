import { useState } from 'react'
import tableData from '../data/tableData'
import Table from '../components/Table'

const TableMap = () => {
  const [tableList, setTableList] = useState(tableData)
  const [open, setOpen] = useState(true) 
  

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
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TableMap
