import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    
    <div className='flex items-center text-white justify-center text-center mx-auto p-12'>
  <div className='w-[50%] pr-12'>
    <h1 className='text-4xl font-semibold text-cyan-600 text-center'><b>About Me</b></h1>
    <p className='max-w-xl text-2xl'>
      My name is Aisha Junaid, and I am currently studying in my second year of intermediate in Computer Science at 
      Khatoon-e-Pakistan College. I have been interested in technology and programming since childhood, which led me 
      to start learning HTML and CSS early on. Over time, I expanded my skills to include JavaScript and TypeScript, 
      and I'm now working on mastering Next.js and Tailwind CSS to build modern and efficient web applications. I am passionate
      about front-end development and excited to continue growing my skills and exploring new technologies in the field.
    </p>
  </div>
  <div className="flex justify-center">
    <Image 
      src="/about.jpg" 
      className='rounded-xl' 
      alt="About Me" 
      height={300} 
      width={300} 
    />
  </div>
</div>


  )
}

export default About;
