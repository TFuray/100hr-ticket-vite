const AddButton = ({showTicketForm, text, onClick}) => {
  return (
    <button
      style={{ width: "80px" }}
      className={
        showTicketForm
          ? "text-black btn btn-outline btn-error btn-sm"
          : "text-black btn btn-outline btn-success btn-sm"
      } 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default AddButton
