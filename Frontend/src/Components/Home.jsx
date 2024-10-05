import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    
    <div className='w-full h-screen bg-no-repeat bg-cover  bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg")] bg-opacity-100'>
        <nav className='flex items-center justify-between  bg-gradient-to-b from-black'>
            <img className='w-60 ml-24' src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="" />
            <div className=' relative'>
              <Link to="/login">  <button className='absolute bg-red-600 px-4 py-2 w-[100px] top-[-25px] right-24 text-white font-semibold rounded-md'>Sign In</button> </Link>
            </div>
        </nav>
        <div className=' flex items-center  mt-20 flex-col h-[71vh] bg-gradient-to-t from-black '>
            <p className='text-6xl font-extrabold text-white'>Unlimited movies,</p>
            <p className='text-6xl font-extrabold text-white'>shows and more</p>
            <p className='mt-3 text-white text-2xl font-bold'>Starts at ₹149. Cancel at any time.</p>
            <p className='mt-3 text-white tracking-tighter text-2xl'>Ready to watch? create Your Account or restart your membership.</p>
        </div>
    </div>
  )
}

export default Home