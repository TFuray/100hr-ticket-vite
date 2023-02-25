const AddButton = ({color, text, onClick}) => {
  return (
    <button 
      style={{background: color}} 
      className="btn add"
      onClick={onClick}
    >
     {text} 
    </button>
  )
}

export default AddButton
