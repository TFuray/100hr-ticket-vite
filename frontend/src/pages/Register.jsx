import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/generalComps/Spinner'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  )

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onSubmit = e => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="flex justify-center">
      <div className='card bg-primary w-80 h-96 place-content-center shadow-lg'>
        <section className='text-center'>
          <h3 className='text-white mb-3 text-xl '>Please create an account</h3>
        </section>

        <section className='form flex justify-center'>
          <form onSubmit={onSubmit}>
            <div className='form-group mb-1'>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                placeholder='Enter your name'
                onChange={onChange}
                className='form-control input input-bordered w-full max-w-xs'
              />
            </div>
            <div className='form-group mb-1'>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                placeholder='Enter your email'
                onChange={onChange}
                className='form-control input input-bordered w-full max-w-xs'
              />
            </div>
            <div className='form-group mb-1'>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                placeholder='Enter password'
                onChange={onChange}
                className='form-control input input-bordered w-full max-w-xs'
              />
            </div>
            <div className='form-group mb-1'>
              <input
                type='password'
                id='password2'
                name='password2'
                value={password2}
                placeholder='Confirm password'
                onChange={onChange}
                className='form-control input input-bordered w-full max-w-xs'
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-block'>
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Register
