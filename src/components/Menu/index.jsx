import React from 'react'
import logo from "../../images/Spotify_Logo.png"
import { Link } from 'react-router-dom'
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LuLibrary } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { IoMdWifi } from "react-icons/io";

const Menu = () => {
  return (
    <div className='bg-black w-[300px] text-[#FFFFFF] pt-[30px]'>
        <img className='w-[164px] ml-[30px] mb-[30px]' src={logo}/>
        <nav className='w-[280px] mx-[10px] mb-[52px]'>
          <ul className='w-full'>
            <Link><li className='dm_font flex items-center text-[19px] leading-6 gap-6 pl-6 h-[45px]'><CiHome className='text-[24px]'/> Home</li></Link>
            <Link><li className='dm_font flex items-center text-[19px] leading-6 gap-6 pl-6 h-[45px]'><CiSearch className='text-[24px]'/> Search</li></Link>
            <Link><li className='dm_font flex items-center text-[19px] leading-6 gap-6 pl-6 h-[45px]'><LuLibrary className='text-[24px]'/> Your Libary</li></Link>
          </ul>
        </nav>
        <div className='w-[190px] ml-[30px] mr-[100px] mb-[38px] flex flex-col'>
          <div className=' flex gap-5 mb-5'> 
            <div className='w-[30px] h-[30px] bg-white text-black text-[30px] font-bold relative'> <p className='absolute left-[5px] top-[6px] leading-3'>+</p></div>
            <p className='dm_font text-[19px] leading-6'>Create Playlist</p>
          </div>
          <div className=' flex gap-5 mb-5'> 
            <div className='lg w-[30px] h-[30px] text-white flex justify-center items-center'><FaHeart/></div>
            <p className='dm_font text-[19px] leading-6'>Liked Songs</p>
          </div>
          <div className=' flex gap-5'> 
            <div className='w-[30px] h-[30px] bg-[#004638] text-[#159643] text-[20px] flex justify-center items-center'><IoMdWifi/></div>
            <p className='dm_font text-[19px] leading-6'>Your Episodes</p>
          </div>
        </div>
        <div className='w-[170px] ml-[30px] mr-[100px] mb-[63px] gap-[15px] dm_font'>
          <p>FAV</p>
          <p>Daily Mix 1</p>
          <p>Discover Weekly</p>
          <p>Malayalam</p>
          <p>Dance/Electronix Mix</p>
          <p>EDM/Popular</p>
        </div>
        <div className='w-[140px] ml-[30px] mr-[130px]'>
        <p>Install App</p>
        </div>
    </div>
  )
}

export default Menu