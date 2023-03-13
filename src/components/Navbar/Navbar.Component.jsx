import React, { Component } from 'react'
import { BiChevronDown, BiMenu, BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

// Navbar for small screen
function NavSm() {
  return <>
    <div className='text-white flex items-centre justify-between'>

      {/* Left wala part */}
      <div >
        <h3 className='text-xl font-bold'> It all starts here!</h3>
        <span className='text=gray-400 text-xs flex items-centre cursor-pointer hover:text-white'>
          Gwalior <BiChevronDown  className='h-4 mx-1'/>
        </span>
      </div>
    {/* Right wala part */}
      <div className='w-10 h-10'>
        <BiSearch className='w-full h-full' />
      </div>

    </div>
  </>
}

function NavMd() {
  return <>
     <div className='flex items-centre w-full gap-3'>

     <div className='w-10 h-10'>
          <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
           alt="logo" 
           className='w-full h-full' 
           />
        </div>
    <div className='w-full flex items-centre gap-3 bg-white px-3 py-1 rounded-md'>
      <BiSearch />
      <input type="search"
        className='bg-transparent w-full border-none focus:outline-none'
        placeholder='Search for movies,events,plays,sports and activities'
      />
      </div>

    </div>
  </>
}

function NavLg() {
  return <>
    <div className='container flex mx-12 px-4 items-centre justify-between'>

      {/* Left part of the navbar */}
      <div className='flex items-centre w-1/2 gap-3'>
        <div className='w-10 h-10'>
          <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
           alt="logo" 
           className='w-full h-full' 
           />
        </div>
        <div className='w-full flex items-centre gap-3 bg-white px-3 py-1 rounded-md'>
          <BiSearch className='h-8'/>
          <input type="search "
          className='w-full bg-transparent border-none focus:outline-none'
          placeholder='Search for movies,events,plays,sports and activities' 
          />
        </div>
      </div>

      {/* Right part of the navbar */}
      <div className='flex items-centre gap-3'>
        <span className='text-gray-200 h-8 text-base flex items-centre cursor-pointer hover:text-white'>
          Gwalior <BiChevronDown className='h-6'/>
        </span>
        <Link to='/plays' className='text-gray-200 text-base flex iteems-center cursor-pointer hover:text-white ' > 
        Plays
        </Link>
        <button className='bg-red-600 text-white px-2 h-8 text-sm rounded'>
          Sign In
        </button>
        <div className='w-8 h-8 text-white'>
          <BiMenu className='w-full h-full'/></div>
      </div>


    </div>
  </>
}



// Main Component
const Navbar = () => {
  return <nav className=' bg-darkBackground-700 px-4 py-3'>
    {/* for mobile screen */}
    <div className='md:hidden'>
      <NavSm/>
    </div>

    {/* for tablet screeen */}
    <div className='hidden md:flex lg:hidden'>
      <NavMd/>
    </div>

    {/* for largenscreen */}
    <div className='hidden md:hidden lg:flex'>
      <NavLg/>
    </div>


  </nav>
};

export default Navbar;