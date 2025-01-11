import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import WheelmanSignup from './pages/WheelmanSignup'
import WheelmanLogin from './pages/WheelmanLogin'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/wheelman-signup" element={<WheelmanSignup />} />
        <Route path="/wheelman-login" element={<WheelmanLogin />} />
      </Routes>
    </>
  )
}

export default App
