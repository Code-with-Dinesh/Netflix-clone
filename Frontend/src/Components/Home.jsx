import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
const Home = () => {
  return (
    <div>
   
    <div className='w-full h-screen bg-no-repeat bg-cover bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg")] bg-opacity-100'>
        {/* Navigation Bar */}
        
        <nav className='flex items-center relative lg:mt-[-35px] sm:mt-[-10px] md:mt[-10px]  bg-gradient-to-b from-black p-4 md:p-6'>
            <img className='w-40 sm:w-60' src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="Netflix Logo" />
            <Link to="/login">
                <button className='bg-red-600 absolute right-8 top-14 px-4 py-2 w-[100px] text-white font-semibold rounded-md hover:bg-red-700 transition duration-300'>
                    Sign In
                </button>
            </Link>
            <Link to="/login">
                <button className='bg-red-600 absolute top-14 right-36 px-4 py-2 w-[100px] text-white font-semibold rounded-md hover:bg-red-700 transition duration-300'>
                    Logout
                </button>
            </Link>
        </nav>
        {/* Hero Section */}
        <div className='flex flex-col bg-gradient-to-t from-black items-center mt-24  h-screen'>
            <p className='text-4xl md:text-6xl font-extrabold text-white text-center'>Unlimited movies,TV</p>
            <p className='text-4xl md:text-6xl font-extrabold text-white text-center'>shows and more</p>
            <p className='mt-3 text-white text-lg md:text-2xl font-semibold text-center'>Starts at ₹149. Cancel at any time.</p>
            <p className='mt-3 text-zinc-300  text-sm tracking-tighter md:text-2xl text-center'>
                Ready to watch? Create your account or restart your membership.
            </p>
        </div>
    </div>

    {/* Cards Section */}
    <div className='flex flex-col gap-4 md:flex-row w-full justify-evenly bg-black p-6 md:p-12 '>
        <Card title="Enjoy on your TV" content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." />
        <Card title="Download your shows to watch offline" content="Save your favorites easily and always have something to watch." />
        <Card title="Watch everywhere" content="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
        <Card title="Create profiles for kids" content="Send kids on adventures with their favorite characters in a space made just for them, free with your membership." />
    </div>
</div>
  )
}

export default Home