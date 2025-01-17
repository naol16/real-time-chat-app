
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import GroupIcon from '@mui/icons-material/Group';
// import GroupsIcon from '@mui/icons-material/Groups';
import { useContext } from 'react';
import  axiosurl from "../../../axios/axios"
import { useState,useEffect} from 'react';
import Avatar from "@mui/material/Avatar";
import { Result } from 'postcss';
import Mycontext from '../mycontext/mycontext';
function Usergrouplist() {
 const [users,Setusers]=useState([])
 const [groups,Setgroups]=useState([])
 const [group,Setgroup]=useState(false)
 const [objectid,Setobjectid]=useState()
 const {user,Setuser}=useContext(Mycontext)
 //console.log(user.username)
useEffect(()=>{ 
  const fetchdata=async()=>{
    try{
    console.log("nolawi");
    const token= localStorage.getItem("token");
     const {data}= await axiosurl.get('/user/getuser',{
       headers:{Authorization:`Bearer ${token}`}
     });
     console.log(data);
     Setusers(data)
    }
    catch(error){
     console.error(message)
    }
   
  }
fetchdata();

const fetchuser=async()=>{
  try{
    console.log("nolawi");
    const token= localStorage.getItem("token");
     const {data}= await axiosurl.get('/group/groups',{
       headers:{Authorization:`Bearer ${token}`}
     });
     console.log(data);
     Setgroups(data);
    }
    catch(error){
     console.error(message)
    }
  
  }
fetchuser();

const fetchmessages= async()=>{
  // try{
  //   const {data}=

  // } 
  // catch(error){
  //   console.log(error.message)
  // }

}
}


 ,
  []
)

function changer(){
  Setgroup((prevgroup)=>!prevgroup)
  }

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
        <div  onClick={changer}>
        
        <GroupIcon  className='bg-white mr-5 mt-7'/>
        <h1 className='font text-white text-lg'>groups</h1>
        </div>


        <ul>
      {!group && users.map((user,i)=>(
        <li key={i} >
        <div className='flex items-center mt-6'>
              <p className='flex ml-20 mt-4'><Avatar className='bg-white w-[32] rounded-lg   mr-4' /> 
              <span className='text-white '>{user.name}</span></p>
        </div>
        </li>
      )
      )
}
{group && groups.map((group,i)=>(
        <li key={i}>
        <div className='flex items-center mt-6'>
              <p className='flex ml-20 mt-4'><Avatar className='bg-white w-[32] rounded-lg   mr-4' /> 
              <span className='text-white '>{group.groupchatname}</span></p>
        </div>
        </li>
      )
      )
}
 </ul>
          </div>
      <div>
        {/* we will render the values here 
        here and also  we will have  the input section to add the inputs 
        
        */}
       <div>

       </div>
      </div>
    </div>
  
  )
}

export default Usergrouplist
