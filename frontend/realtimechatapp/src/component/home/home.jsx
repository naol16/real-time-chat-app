import React from 'react'

function Home() {
  return (
    <div className="flex flex-col bg-radial-gradient   min-h-screen justify-center items-center">
      <div  className='text-center'>
      <h1 className=" text-white  text-3xl">
        dynamite chat
      </h1>
      <div className=" mt-40">
        <p className='text-white text-5xl'>
          connect friends easily & quickly
        </p>
      </div>
      </div>
      <div className='mt-40'>
        <p className='text-white'>
          our chat app is perfect way to stay connected
        </p>
      </div>
    <div className='mt-40 b'>
      <button className='border-8 border-white text-black bg-white  rounded-md  hover:bg-gray-100 '>
       sign up with in email
      </button>
    </div>
    <div className='flex justify-between text-white pt-20'>
      <div className='text-[#B9C1BE]'>
      <p>existing account </p>
      </div>
      <div className='pl-2'>
        login
      </div>
    </div>
    </div>
  )
}

export default Home
