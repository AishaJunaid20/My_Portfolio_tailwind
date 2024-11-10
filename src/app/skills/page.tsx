import React from 'react'

const skills = () => {
  return (
    <div>
        <h2 className='mt-18 mb-24 text-center text-4xl font-bold underline text-cyan-700 mt-11'>My Skills</h2>
        <ul className='mt-[40px] mb-5'>
            <li className=' mb-3 text-2xl text-white ml-16 font-semibold'>HTML</li><div className='w-[75%] h-4 ml-16 bg-red-900 rounded-xl'></div>
            <li className='mb-3 text-2xl text-white ml-16 font-semibold'>CSS</li><div className='w-[70%] h-4 ml-16 bg-blue-500 rounded-xl'></div>
            <li className='mb-3 text-2xl text-white ml-16 font-semibold'>Typescript</li><div className='w-[65%] h-4 ml-16 bg-orange-500 rounded-xl'></div>

            <li className='mb-3 text-2xl text-white ml-16 font-semibold'>Javascript</li><div className='w-[59%] h-4 ml-16 bg-yellow-300 rounded-xl'></div>
            <li className='mb-3 text-2xl text-white ml-16 font-semibold'>NextJs</li><div className='w-[60%] h-4 ml-16 bg-pink-950 rounded-xl'></div>
        
            <li className='mb-3 text-2xl text-white ml-16 font-semibold'>TailwindCSS</li><div className='w-[55%] h-4 ml-16 bg-purple-800 rounded-xl'></div>
            <li className='mb-3 text-2xl text-white ml-16 font-semibold'>React</li><div className='w-[45%] h-4 ml-16 bg-green-300 rounded-xl'></div>                  </ul>
    </div>
  )
}

export default skills