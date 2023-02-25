import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  const toggleDark = () => {
    setTheme('dark')
  }
  const toggleLight = () => {
    setTheme('light')
  }

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme)
  }, [theme])

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='z-40' aria-label='Page Header'>
      <div class='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8'>
        <div class='sm:flex sm:items-center sm:justify-between'>
          <div class='text-center sm:text-left'>
            <h1 class='text-2xl font-bold rgb(166, 173, 187) sm:text-3xl'>
              Welcome Back, {user && user.name}!
            </h1>

            <p class='mt-1.5 text-lg text-gray-500'>
              The Whole House 
            </p>
          </div>

          <div class='mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <div className='btn-group'>
                  <input
                    type='radio'
                    name='options'
                    data-title='light'
                    className='btn'
                    onClick={toggleLight}
                  />
                  <input
                    defaultChecked
                    type='radio'
                    name='options'
                    data-title='dark'
                    className='btn'
                    onClick={toggleDark}
                  />
                </div>
              </li>
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
                    <ul className='p-2 bg-base-100 z-50'>
                      <li>
                        <Link to='/map'>Table Map</Link>
                      </li>
                      <li>
                        <Link to='/'>Side Work</Link>
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
                    <Link to='/login'>Login</Link>
                  </li>
                  <li>
                    <Link to='/register'>Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>

    // <div className='navbar bg-base-100'>
    //   <div className='flex-1'>
    //     <Link to='/' className='btn btn-ghost normal-case text-xl'>
    //       Resturant Tracker
    //     </Link>
    //   </div>
    //   <div className='flex-none'>
    //     <ul className='menu menu-horizontal px-1'>
    //       <li>
    //         <div className='btn-group'>
    //           <input
    //             type='radio'
    //             name='options'
    //             data-title='light'
    //             className='btn'
    //             onClick={toggleLight}
    //           />
    //           <input
    //             type='radio'
    //             name='options'
    //             data-title='dark'
    //             className='btn'
    //             onClick={toggleDark}
    //           />
    //         </div>
    //       </li>
    //       {user ? (
    //         <>
    //           <li tabIndex={0}>
    //             <a>
    //               Navigate
    //               <svg
    //                 className='fill-current'
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='20'
    //                 height='20'
    //                 viewBox='0 0 24 24'
    //               >
    //                 <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
    //               </svg>
    //             </a>
    //             <ul className='p-2 bg-base-100'>
    //               <li>
    //                 <Link to='/map'>Table Map</Link>
    //               </li>
    //               <li>
    //                 <Link to='/'>Side Work</Link>
    //               </li>
    //               <li>
    //                 <Link to='/orders'>All Orders </Link>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a onClick={onLogout}>Logout</a>
    //           </li>
    //         </>
    //       ) : (
    //         <>
    //           <li>
    //             <Link to='/login'>Login</Link>
    //           </li>
    //           <li>
    //             <Link to='/register'>Register</Link>
    //           </li>
    //         </>
    //       )}
    //     </ul>
    //   </div>
    // </div>
  )
}

export default Header
