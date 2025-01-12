import { Route, Routes } from 'react-router-dom'
import './App.css'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import WheelmanSignup from './pages/WheelmanSignup'
import WheelmanLogin from './pages/WheelmanLogin'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import WheelmanHome from './pages/WheelmanHome'
import WheelmanProtectedWrapper from './pages/WheelmanProtectedWrapper'
import WheelmanLogout from './pages/WheelmanLogout'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/home" element={<UserProtectedWrapper><Home /></UserProtectedWrapper>} />
        <Route path="/user/logout" element={<UserProtectedWrapper><UserLogout /></UserProtectedWrapper>} />
        <Route path="/wheelman-signup" element={<WheelmanSignup />} />
        <Route path="/wheelman-login" element={<WheelmanLogin />} />
        <Route path="/wheelman-home" element={<WheelmanProtectedWrapper><WheelmanHome /></WheelmanProtectedWrapper>} />
        <Route path="/wheelman/logout" element={<WheelmanProtectedWrapper><WheelmanLogout /></WheelmanProtectedWrapper>} />
      </Routes>
    </>
  )
}

export default App
