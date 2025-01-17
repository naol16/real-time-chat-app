import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import{BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Router>
    <App />
    </Router>
  </StrictMode>,
)
