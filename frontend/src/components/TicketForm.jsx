import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTicket } from '../features/tickets/ticketSlice'

const TicketForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [project, setProject] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [priority, setPriority] = useState('')
  const [type, setType] = useState('')

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(
      createTicket({ title, description, project, assignedTo, priority, type })
    )
    setTitle('')
    setDescription('')
    setProject('')
    setAssignedTo('')
    setPriority('')
    setType('')
  }

  return (
    <section className='form'>
      <h2 className='form'>New Ticket</h2>
      <form onSubmit={onSubmit}>
        <div className='form-group title'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            placeholder='Title'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group priority'>
          <label htmlFor='priority'>Priority</label>
          <select
            onChange={e => setPriority(e.target.value)}
            name='priority'
            id='priority'
            placeholder='Priority'
          >
            <option value='' disabled selected>
              Priority
            </option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </div>
        <div className='form-group description'>
          <label htmlFor='description'>Description</label>
          <textarea
            type='text'
            placeholder='Description'
            name='description'
            id='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className='form-group project'>
          <label htmlFor='project'>Project</label>
          <input
            type='text'
            name='project'
            id='project'
            placeholder='Project'
            value={project}
            onChange={e => setProject(e.target.value)}
          />
        </div>

        {/* <div className='form-group assigned'>
          <label htmlFor='assignedTo'>Assigned To</label>
          <select
            onChange={e => setPriority(e.target.value)}
            name='assignedTo'
            id='assignedTo'
          >
            <option value='' disabled selected>
             Assigned To 
            </option> */}
        {/* {user.map((user) => ( 
              <option value={user.name}>{user.name}</option>
            ))}  */}
        {/* <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </div> */}

        <div className='form-group assigned'>
          <label htmlFor='assignedTo'>Assigned To</label>
          <input
            type='text'
            name='assignedTo'
            placeholder='Assigned To'
            id='assignedTo'
            value={assignedTo}
            onChange={e => setAssignedTo(e.target.value)}
          />
        </div>

        <div className='form-group type'>
          <label htmlFor='type'>Type</label>
          <input
            type='text'
            name='type'
            placeholder='type'
            id='type'
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Ticket
          </button>
        </div>
      </form>
    </section>
  )
}

export default TicketForm
