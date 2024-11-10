import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <div>
    <section className="text-gray-300 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-cyan-600 lg:w-1/3 lg:mb-0 mb-4">
        There are some of my Projects
      </h1>
      <p className="lg:pl-6 lg:w-2/3  flex mx-auto leading-relaxed text-base">
      Certainly! Here’s a short, three-line paragraph you could use to describe your projects:

---

"I have built a variety of projects showcasing my skills in HTML, CSS, JavaScript, and TypeScript. By incorporating Next.js and Tailwind CSS, I've created responsive, efficient web applications with a strong focus on UI/UX. Each project demonstrates my dedication to mastering modern web development tools and frameworks." 

--- 

Let me know if you'd like any more customization!
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image
          
            
            src="/image1.jpg"
            width={500}
            height={500}
              alt="gallery"
              className="w-full h-full object-cover object-center block"
           
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
        
            src="/image2.jpg"
            width={500}
            height={500}
              alt="gallery"
              className="w-full object-cover h-full object-center block"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image
          
            src="/image3.jpg"
            width={500}
          height={500}
            alt="gallery"
            className="w-full h-full object-cover object-center block"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image
         
            src="/image4.jpg"
            width={500}
            height={500}
              alt="gallery"
              className="w-full h-full object-cover object-center block"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
         
            src="/image5.jpg"
            width={500}
            height={500}
              alt="gallery"
              className="w-full h-full object-cover object-center block"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image
         
            src="/image6.jpg"
            width={500}
            height={500}
              alt="gallery"
              className="w-full h-full object-cover object-center block"
          />
        </div>
      </div>
    </div>
  </div>
</section>
<div className="mt-6">
    <p className='font-semibold text-cyan-200 text-2xl'>If you want to see my projects do visit my GITHUB:</p>
        <a
          href="https://github.com/AishaJunaid607" // Replace with your GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg mb-16 text-cyan-700 hover:text-blue-600"
        >
          View my GitHub Profile
        </a>
      </div>
    </div>
  )
}

export default page