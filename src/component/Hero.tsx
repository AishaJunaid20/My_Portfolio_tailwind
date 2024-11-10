import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
        <Image src="/images.jpg" alt="my pic" width={200} height={200}  className='rounded-full ml-[40%]'/>
        <div>
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    
  </svg>
        <h2 className='text-7xl text-left gap-y-3 ml-[40%] font-bold text-cyan-700 '> Hello <br/>I am  <br/>Aisha Junaid</h2>
    </div>
    </div>
  )
}

export default Hero
