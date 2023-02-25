import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/generalComps/Spinner'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()

    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='flex justify-center'>
      <div className='card bg-primary w-80 h-80 place-content-center shadow-lg'>
        <section className='text-center'>
          <h3 className='text-white mb-2 text-xl' >Login</h3>
        </section>
        <section className='form flex justify-center'>
          <form onSubmit={onSubmit}>
            <div className='form-group mb-1'>
              <input
                type='text'
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

export default Login
