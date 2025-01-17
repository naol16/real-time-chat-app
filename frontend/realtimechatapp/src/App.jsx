import { useEffect, useState } from 'react'
import{BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom'
import Home from './component/home/home'
import Signup from './pages/signup/signup'
import Signin from './pages/login.jsx/login'
import Mycontext  from  './component/mycontext/mycontext'
import Usergrouplist from './component/userandgrouplist/userandgrouplist'
import axiosurl from '../axios/axios'
function App() {
const navigate=useNavigate()
const [user,Setuser]=useState();
 const token =localStorage.getItem('token')
async function Checker() {
try{
const{data}= await axiosurl.get('/user/checker',{
  headers:{
    Authorization:"Bearer "+token
  }

}
)


console.log(data);
Setuser(data)
}
catch(error){
  console.log(error);
  navigate('/')
}

}
useEffect(()=>{
  Checker();
},
  []
)
  return (
  <>

  <Mycontext.Provider value={{user,Setuser}}>
  <Routes>
 <Route  path="/"  element={<Home/>}>
 </Route>
 <Route path="/signup"  element={<Signup/>}>
</Route>
<Route path="/signin"  element={<Signin/>}></Route>
<Route path="/userlist"  element={<Usergrouplist/>}></Route>
 </Routes>
 </Mycontext.Provider>

    </>
  )
}

export default App
