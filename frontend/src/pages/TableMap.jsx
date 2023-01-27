import tableData from "../data/tableData"
import Table from "../components/Table"

const TableMap = () => {
  const tableItems = tableData.map(table => {
    return (
      <div>
        <Table key={table.table} table={table.table} seats={table.seats} />
      </div>
    )
  })

  return (
    <div>
    <div className="grid grid-rows-5 grid-flow-col gap-4">
      {tableItems}
    </div>
    </div>
  )
}

export default TableMap 