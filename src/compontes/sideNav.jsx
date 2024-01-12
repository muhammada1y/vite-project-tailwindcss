import React,{useState } from "react";
import { AiOutlineHome, AiOutlineMenu,AiOutlineProject,AiOutlineMail } from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {GrProjects} from 'react-icons/gr';

const SideNav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = ()=>{
        setNav(!nav)
    }
  return (
    <>
      <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
      {
        nav ? (
          <div className="fixed w-full h-screen bg-white/50 flex flex-col justify-center items-center z-20 md:hidden">
  <a onClick={handleNav}
   href="#howm" className="w-[35%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-300 ease-in duration-300">
    <AiOutlineHome size={20}/>
    <span className="pl-4">Home</span>
  </a>
  <a  onClick={handleNav}
  href="#work" className="w-[35%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-300 ease-in duration-300">
    <GrProjects size={20}/>
    <span className="pl-4">Work</span>
  </a>
  <a onClick={handleNav}
  href="#project" className="w-[35%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-300 ease-in duration-300">
    <AiOutlineProject size={20}/>
    <span className="pl-4">Project</span>
  </a>
  <a onClick={handleNav}
  href="#contact" className="w-[35%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-300 ease-in duration-300">
    <AiOutlineMail size={20}/>
    <span className="pl-4">Contact</span>
  </a>
  <a onClick={handleNav}
  href="#resume" className="w-[35%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-300 ease-in duration-300">
    <BsPerson size={20}/>
    <span className="pl-4">Resume</span>
  </a>
 
</div>

        ):(
           <div className="md:block hidden fixed top-[25%] z-10">
            <div className="flex flex-col">
              <a href="#home" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-300 ease-in duration-300">
               <AiOutlineHome size={20}/>
              </a>
            </div>
            <div className="flex flex-col">
              <a href="#work" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-300 ease-in duration-300">
               <GrProjects size={20}/>
              </a>
            </div>
            <div className="flex flex-col">
              <a href="#project" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-300   ease-in duration-300">
               <AiOutlineProject size={20}/>
              </a>
            </div>
            <div className="flex flex-col">
              <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-300 ease-in duration-300">
               <AiOutlineMail size={20}/>
              </a>
            </div>
            <div className="flex flex-col">
              <a href="#resume" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-300 ease-in duration-300">
               <BsPerson size={20}/>
              </a>
            </div>
            
           </div>
        )
      }
    </>
  );             
}

export default SideNav;
