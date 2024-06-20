import React from 'react'
import logo from "../assets/logo.png"
import man from "../assets/man.png"

const Header = () => {
  return (
    <div className='flex justify-between px-9 py-5'>
        <div className='flex items-center gap-4'>
        <img
        className='h-[50px]' 
        src={logo} alt="logo"/>
        <ul className='flex flex-row gap-7 text-white '>
            <li className='hover:scale-110 cursor-pointer transition-all hover:bg-red-700 px-3 py-1 pb-2 rounded-lg hover:font-bold'>Movies</li>
            <li className='hover:scale-110 cursor-pointer transition-all hover:bg-red-700 px-3 py-1 pb-2 rounded-lg hover:font-bold'>Series</li>
            <li className='hover:scale-110 cursor-pointer transition-all hover:bg-red-700 px-3 py-1 pb-2 rounded-lg hover:font-bold'>Kids</li>
        </ul>
        </div>
        <img 
        className='h-[45px] invisible md:visible'
        src={man} alt="profile" />
    </div>
  )
}

export default Header