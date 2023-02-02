const Table = ({ open, table, seats}) => {
  
  return (
    <div
      className='table content-center'
      style={{ backgroundColor: open ? 'rgb(54, 211, 153)' : 'rgb(248, 114, 114)' }}
    >
      <h3 className='text-3xl'>{table}</h3>
      <div>Seats: {seats}</div>
    </div>
  )
}

export default Table
