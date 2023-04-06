import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../../features/auth/authSlice"
import Logo from "../../public/logoWhite.png"

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [theme, setTheme] = useState("buisness")

  // const toggleTheme = () => {
  //   setTheme(theme === 'buisness' ? 'light' : 'buisness')
  // }
  // const toggleBuisness = () => {
  //   setTheme('buisness')
  // }
  // const toggleLight = () => {
  //   setTheme('light')
  // }

  // useEffect(() => {
  //   document.querySelector('html').setAttribute('data-theme', theme)
  // }, [theme])

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  return (
    <header
      className="bg-secondary z-40"
      aria-label="Page Header"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-2 mb-6 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <Link
              className="flex items-center"
              to="/"
            >
              <img
                src={Logo}
                className="w-12 h-12 mr-3 drop-shadow-lg"
                alt=""
              />
              <div className="flex flex-col">
                <h1 className="text-white text-3xl font-bold">
                  {user ? (
                    <>
                    Welcome Back <span className="text-secondary-content text-3xl font-semibold ">{user.name}</span>!
                    </>
                  ): (
                  "Welcome"
                    )}
                </h1>

                <p className="mt-1.5 text-2xl text-secondary-content font-bold drop-shadow-md">
                  The Whole House
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <ul className="menu menu-horizontal text-white text-lg px-1">
              {user ? (
                <>
                  <li
                    tabIndex={0}
                    className="z-50 drop-shadow-md"
                  >
                    <a>
                      Navigate
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </a>
                    <ul className="p-2 bg-base-300 z-50">
                      <li>
                        <Link to="/">Side Work</Link>
                      </li>
                      <li>
                        <Link to="/map">Table Map</Link>
                      </li>
                      <li>
                        <Link to="/orders">All Orders </Link>
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
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
