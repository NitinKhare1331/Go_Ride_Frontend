import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/userContext.jsx'
import WheelmanContext from './context/WheelmanContext.jsx'

createRoot(document.getElementById('root')).render(
    <WheelmanContext>
        <UserContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
    </UserContext>
    </WheelmanContext>
)
