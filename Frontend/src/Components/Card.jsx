import React from 'react'
import { FaTv } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoTelescopeFill } from "react-icons/go";
import { PiCardsLight } from "react-icons/pi";
const Card = ({title,content}) => {
  return (
    <div className='w-full sm:w-80 h-72 text-white relative rounded-2xl cursor-pointer p-6 sm:p-8' style={{ background: 'linear-gradient(150deg, rgba(8,3,41,1) 14%, rgba(60,7,13,1) 180%)' }}>
    <h2 className='text-lg sm:text-2xl  font-semibold'>{title}</h2>
    <p className='text-zinc-500 mt-2 text-sm sm:text-base'>{content}</p>
    {title === "Enjoy on your TV" && <FaTv className='absolute right-4 sm:right-6 bottom-4 text-red-300 sm:bottom-6' size={40} />}
    {title === "Download your shows to watch offline" && <MdOutlineFileDownload className='absolute text-red-300 right-4 sm:right-6 bottom-4 sm:bottom-6' size={40} />}
    {title === "Watch everywhere" && <GoTelescopeFill className='absolute right-4 sm:right-6 bottom-4  text-red-300 sm:bottom-6' size={40} />}
    {title === "Create profiles for kids" && <PiCardsLight className='absolute right-4 sm:right-6 text-red-300 bottom-4 sm:bottom-6' size={40} />}
</div>

  )
}

export default Card