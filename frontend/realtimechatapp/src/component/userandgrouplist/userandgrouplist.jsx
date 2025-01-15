
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import  axiosurl from "../../../axios/axios"
import { useState,useEffect} from 'react';
import { Result } from 'postcss';
async function Usergrouplist() {

 const [users,Setusers]=useState([])
 const token= localStorage.getItem("token");
useEffect(async()=>{
    try{
     const result = await axiosurl.get('/user/getuser',{
       headers:{Authorization:`Bearer ${token}`}
     });
     Setusers([result.data])
   
    }
    catch(error){
     console.log(error);
    }
   
  }
  ,
  []
)

  return (
    <div className='flex  bg-radial-gradient min-h-screen'>
      <div  className="w-[33%] bg-[#111111] p-5">
        
       <div className='flex items-center space-x-3'><SearchIcon className="text-white"/>
          <input
          type="text"
          // value={searchitem}
          // onChange={handleinput}
          placeholder="type the title of dsa"
          className="text-black  w-full sm:w-[20vw] rounded-md  py-2 px-3"
          >
          </input>      
           </div>
        <ul>
      { users.map((user)=>(
        <li key={user}>
        <div className='flex items-center mt-6'>
              <p className='flex ml-12 mt-4'><PersonRoundedIcon className='bg-white w-[32] rounded-lg   mr-4' /> 
              <span className='text-white '>{user.name}</span></p>
        </div>
        </li>
      )
      )
}
        </ul>
          </div>
      
    
    </div>
  )
}

export default Usergrouplist
