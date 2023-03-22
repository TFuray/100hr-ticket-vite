const AddButton = ({showTicketForm, text, onClick}) => {
  return (
    <button
      style={{ width: "80px" }}
      className={
        showTicketForm
          ? "text-black btn add btn-outline bg-red-600 btn-sm"
          : "text-black btn add btn-outline bg-green-600 btn-sm"
      } 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default AddButton
