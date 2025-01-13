import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axiosurl from '../../../axios/axios';

function Signup() {
    const navigate =useNavigate()
    const username = useRef();
    const firstname = useRef();
    const lastname =useRef();
    const useremail = useRef();
    const userpassword = useRef();
  const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log("form submitted");
    const name= firstname.current.value
    const userName= username.current.value
    const email= useremail.current.value
    const password= userpassword.current.value
    if (!name || !userName || !email || !password){
      alert("provide all the information!")
      return;
    }
    try{
    const result= await  axiosurl.post('user/adduser',{
      name:name,
      username:userName,
      email:email,
      password:password
 }
    )
    alert("registered successfully");
    navigate("/signin")
    console.log(result);

    }
    catch(error){
      console.log(error.message);
      alert("there some error or you have used existing email")
    }
  
}
  return (
    <div className='flex flex-col bg-radial-gradient min-h-screen'>
    <div className="flex justify-center mt-32">
    <p className='text-[#B9C1BE]'>
    Getting chatting   with friends  and family today by sign up our chat  app!
    </p>
    </div> 
    <div className=''>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form   className="space-y-6"  onSubmit={handleSubmit}>

      <div>
          <label className="text-white font-medium leading-6 ">
            user name
          </label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="user name"
              ref={username}
              className="px-4 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder: focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${dark?'text-white bg-black':'text-black bg-white"
            />
          </div>
        </div>
        <div>
          <label  className="block text-white font-medium leading-6">
            first name  
          </label>
          <div className="mt-2">
            <input
              id="firstname"
              name="firstname"
              type="text"
              required
              autoComplete="firstname"
              ref={firstname}
              className="px-4 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label  className="block text-white font-medium leading-6">
            lastname
          </label>
          <div className="mt-2">
            <input
              id="lastname"
              name="lastname"
              type="text"
              ref={lastname}
              className="px-4 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${dark?'text-white bg-black':'text-black bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-white font-medium leading-6">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              ref={useremail}
              className="px-4 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${dark?'text-white bg-black':'text-black bg-white"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-white font-medium leading-6">
              Password
            </label>
          </div>
          <div className="mt-2 flex items-center justify-center">
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              ref={userpassword}
              className="px-4 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-shadow-sm hover:bg-#6366F1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-#6366F1"
          >
            join us
          </button>
        </div>
      </form>
    </div>
  
    </div>
    </div>
    
  )
}

export default Signup
