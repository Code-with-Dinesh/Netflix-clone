import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center  bg-no-repeat bg-cover relative bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg")] bg-opacity-100'>
     <Link to="/">   <img className='w-60 absolute top-[-20px] left-24 ' src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="" /> </Link> 

        <div className='bg-black opacity-90 w-[340px] flex flex-col rounded-md p-8'>
          <form action="" className='flex flex-col'>
            <h1 className='text-white text-2xl mb-4 font-semibold'>Sing In</h1>
            <input className='mb-2 px-3 py-3 bg-transparent border-[1px] rounded-md' type="email" name='email' placeholder='Email or Mobile Number' />
            <input className='mb-2 px-3 py-3 mt-2 border-[1px] bg-transparent rounded-md' type="Password" name='password' placeholder='password' />
            <button className='mb-2 px-3 py-3 mt-2 bg-red-600  text-white rounded-md'>Sign In</button>
            <p className='text-white text-center'>OR</p>
            <p className='text-white mt-2 ml-2'>New To Netfilx? <span>Sign up Now</span></p>

          </form>
        </div>
    </div>
  )
}

export default Login