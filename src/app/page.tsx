
import Hero from "@/component/Hero";

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return(
<div>
{/* <div>
       <div className="bg-yellow-600 w-full h-[100px]">
  <div className="flex w-full ">
  <div className="pt-[20px] ml-[20px] max-w-30%">
    <Image src="/image.jpg" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveN_aY8mXIyQRJykef1nNs-QIbtuqyLfjPmYo4kx0hngSHHgwXUW70uuglJc5-8kYbGA&usqp=CAU" width={70} height={70}/>
  </div>
  <div className="flex  pt-[30px] w-[70%]">
    <ul className="flex gap-8 ml-[30%] text-[20px] font-semibold ">
      <li className="hover:text-yellow-200"><a href="/">Home</a></li>
      <Link className="hover:text-yellow-200"href="/about">About</Link>
      <li className="hover:text-yellow-200"><a href="/">Projects</a></li>
      <li className="hover:text-yellow-200"><a href="/">Contact Us</a></li>

    </ul>
  </div>
  <div className=" ml-[5%] mr-[10%] pt-[35px]">
    <button className="bg-yellow-800 text-white  w-[120px] h-[40px] rounded-xl hover:bg-yellow-200">Download CV</button>
  </div>
 </div>
 </div>
    </div>
  */}

      <div className="flex justify-center items-center gap-11">
        <Image src="/images.jpg" alt="my pic" width={300} height={300}  className='rounded-xl mt-9'/>
        <h2 className=' text-7xl font-bold text-cyan-700 pt-9'> Hello <br/>I am  <br/>Aisha Junaid</h2>
        <div className="ml-[10%] flex  justify-center gap-10px mt-12"></div>
       </div>
  
    
</div>

      
        
  );
}
