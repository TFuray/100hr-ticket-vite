import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTicket } from '../../features/tickets/ticketSlice'

const TicketForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [priority, setPriority] = useState('')

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(createTicket({ title, description, assignedTo, priority }))
    setTitle('')
    setDescription('')
    setAssignedTo('')
    setPriority('')
  }

  return (
    <section className='form grid justify-center'>
      <h2 className='text-3xl mb-7 text-center'>New Ticket</h2>
      <br />
      <form className='flex flex-col gap-4' onSubmit={onSubmit}>
        <div className='mb-2 block'>
          <input
            type='text'
            name='title'
            placeholder='Title'
            className='input input-bordered w-full max-w-xs'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group priority'>
          <select
            onChange={e => setPriority(e.target.value)}
            name='priority'
            id='priority'
            className='input input-bordered w-full max-w-xs'
            placeholder='Priority'
            value={priority}
          >
            <option value='Priority' defaultValue>
              Priority
            </option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </div>
        <div className='form-group description'>
          <textarea
            className='textarea textarea-bordered textarea-lg w-full max-w-xs '
            type='text'
            placeholder='Description'
            name='description'
            id='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className='form-group assigned'>
          <select
            type='text'
            className='textarea textarea-bordered textarea-lg w-full max-w-xs '

            name='assignedTo'
            placeholder='Assigned To'
            id='assignedTo'
            value={assignedTo}
            onChange={e => setAssignedTo(e.target.value)}
          >
            <option value='AssignedTo' defaultValue>
              Assigned To
            </option>
            <option value="frontOfHouse">Front Of House</option>
            <option value="backOfHouse">Back Of House</option>
          </select>
        </div>

        <div className='form-group'>
          <button className='btn btn-primary w-4/12' type='submit'>
            Add Ticket
          </button>
        </div>
      </form>
    </section>
  )
}

export default TicketForm
