import React from 'react'
import { bellImage, searchImage, userImage, } from '../assets/images'
import { useLocation } from 'react-router-dom'
import { navbarList } from './Navbar'

const Header = () => {
  const path = useLocation()
  return (
    <header className='p-5 flex justify-between items-center bg-[#F7F8FC]'>
      <h2 className='text-[25px] font-bold'>{navbarList.map(item => item.path === path.pathname && item.title)}</h2>
      <div className='flex items-center gap-5 justify-between'>
        <img src={searchImage} alt="searchImage" />
        <img src={bellImage} alt="searchImage" />
        <span className='h-[32px] w-[1px] bg-[#DFE0EB]'></span>
        <div className='flex justify-between items-center gap-2 cursor-pointer'>
          <h2 className='font-bold text-[15px]'>Jones Ferdinand</h2>
        <img src={userImage} alt="searchImage" />
        </div>
      </div>
    </header>
  )
}

export default Header
