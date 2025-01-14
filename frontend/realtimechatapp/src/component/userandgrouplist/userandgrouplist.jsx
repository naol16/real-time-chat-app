import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import  axiosurl from "../../../axios/axios"

function Usergrouplist() {
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
        <div className='flex items-center mt-6'>
              <p className='flex ml-12 mt-4'><PersonRoundedIcon className='bg-white w-[32] rounded-lg   mr-4' /> 
              <span className='text-white '> naol</span></p>
        </div>
          </div>
      
    
    </div>
  )
}

export default Usergrouplist
