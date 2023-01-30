const Table = ({table, seats}) => {
  return (
    <div
    className="table content-center"
    style={{backgroundColor: open ? 'green' : 'red'}}
     >
      <h3 className="text-3xl">{table} </h3>
      <div
      >Seats: {seats}</div>
    </div>
  )
}

export default Table
