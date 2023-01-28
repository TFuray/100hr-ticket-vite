
const Table = ( {table, seats, open, handleClick}) => {
 
  
  return (
    <div onClick={handleClick} className="table" style={{backgroundColor: open ? 'green' : 'red'}}  >
      <div className="">Table: {table} </div>
      <div
      >Seats: {seats}</div>
    </div>
  )
}

export default Table