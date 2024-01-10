import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter,FaInstagram,FaLinkedin, FaFacebookF} from 'react-icons/fa'

function Main(){
   return(
   <div id="main">
      <img className="w-full h-screen object-cover object-center " alt="img-bg" src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   <div className="w-full h-screen top-0 left-0 bg-white/50 absolute">
     <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
        <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'am ali</h1>
        <h2 className="flex sm:text-3xl text-gray-800 ">
            I'am a
        <TypeAnimation
      sequence={[
        ' Developer',
        1000, 
        ' Coder',
        1000,
        ' DevOps Engineer ',
        1000,
    
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em',paddingleft :"5px" }}
      repeat={Infinity}
    />
        </h2>
        <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20}/>
            <FaFacebookF className="cursor-pointer" size={20}/>
            <FaInstagram className="cursor-pointer" size={20}/>
            <FaLinkedin className="cursor-pointer" size={20}/>
        </div>
     </div>
   </div>
  </div>
    )
}
export default Main;