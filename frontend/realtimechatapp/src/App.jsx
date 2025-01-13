import { useState } from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/home/home'
import Signup from './pages/signup/signup'
import Signin from './pages/login.jsx/login'
function App() {
  return (
  <>
  <Router>
  <Routes>
  <Route  path="/"  element={<Home/>}>
  </Route>
  <Route path="/signup"  element={<Signup/>}>
  </Route>
  <Route path="/signin"  element={<Signin/>}></Route>
  </Routes>
  </Router>
    </>
  )
}

export default App
