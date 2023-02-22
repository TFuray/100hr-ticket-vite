import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import TableMap from './pages/TableMap'
import Orders from './pages/Orders'
import DashboardDRAFT from './pages/DashboardDRAFT'
import TableMapDRAFT from './pages/TableMapDRAFT'

function App () {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<DashboardDRAFT />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/map' element={<TableMapDRAFT />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
