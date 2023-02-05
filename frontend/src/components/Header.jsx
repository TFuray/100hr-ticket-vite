import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          Resturant Tracker
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          {user ? (
            <>
              <li tabIndex={0}>
                <a>
                  Navigate
                  <svg
                    className='fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                  >
                    <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                  </svg>
                </a>
                <ul className='p-2 bg-base-100'>
                  <li>
                    <Link to='/map'>Table Map</Link>
                  </li>
                  <li>
                    <Link to="/">Side Work</Link>
                  </li>
                  <li>
                    <Link to='/orders'>All Orders </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a onClick={onLogout}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/login'>
                   Login
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
