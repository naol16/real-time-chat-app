import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

function Usergrouplist() {
  return (
    <div className='flex  bg-radial-gradient min-h-screen'>
      <div  className="w-[33%] bg-[#111111]">
       <div className='pt-5 pl-3'><SearchIcon className="text-white"/>
          <input
          type="text"
          // value={searchitem}
          // onChange={handleinput}
          placeholder="type the title of dsa"
          className="text-black w-[20vw] rounded-md "
          >
          </input>
          </div>
        <div className='flex flex-col justify-center'>
              <p><PersonRoundedIcon className='bg-white w-[32] rounded-lg ml-12 mt-5 mr-4' /> 
              <span className='text-white my-auto mx-auto'> naol</span></p>
      
        </div>
          </div>
      
    
    </div>
  )
}

export default Usergrouplist
