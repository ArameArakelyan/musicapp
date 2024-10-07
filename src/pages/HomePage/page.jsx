import React from 'react'
import Menu from '../../components/Menu'
import Main from '../../components/Main'
import PlaySlice from '../../components/PlaySlice'
import Footer from '../../components/Footer'
import useFetch from '../../Fetch/useFetch'

const HomePage = () => {
  const album = useFetch('https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc') 
  console.log(album);
  
  return (
    <div className='flex justify-center h-screen flex-col bg-[#FFFFFF]'>
        <div className='w-full h-screen flex'>
            <Menu/>
            <Main/>
        </div>
        <PlaySlice/>
        <Footer/>
    </div>
  )
}

export default HomePage