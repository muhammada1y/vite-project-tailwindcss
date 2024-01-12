import React from "react";
import img1 from "../img/netflix.jpg";
import img2 from "../img/property.jpg";
import cypto from "../img/crypto.jpeg";
function Project(){
     return(
        <div id="project" className="mx-w-[1040px] m-auto md:pl-20 p-4 py-16">
           <h1 className="text-4xl front-bold text-center text-blue-400">projects</h1>
           <p className="text-center py-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem nobis natus dicta omnis 
            nemo vitae eaque iure laboriosam accusamus? Suscipit numquam debitis voluptatum eaque reiciendis ab 
            perspiciatis inventore eligendi sunt?</p>
         <div className="grid sm:grid-cols-2 gap-12">
         <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
  <img src={img1} className="rounded-xl group-hover:opacity-10" />
  <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h1 className="text-2xl font-bold text-white tracking-wider text-center">Netflix</h1>
    <p className="pb-4 pt-2 text-white text-center">React Js</p>
    <a href="#more">
      <p className="text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg"> More Info </p>
    </a>
  </div>
</div>

            
<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
  <img src={img2} className="rounded-xl group-hover:opacity-10" />
  <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h1 className="text-2xl font-bold text-white tracking-wider text-center">Property</h1>
    <p className="pb-4 pt-2 text-white text-center">React Js</p>
    <a href="#more">
      <p className="text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg"> More Info </p>
    </a>
  </div>
</div>
   
<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
  <img src={cypto} className="rounded-xl group-hover:opacity-10" />
  <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h1 className="text-2xl font-bold text-white tracking-wider text-center">Cypto</h1>
    <p className="pb-4 pt-2 text-white text-center">React Js</p>
    <a href="#more">
      <p className="text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg"> More Info </p>
    </a>
  </div>
</div>

<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
  <img src={img1} className="rounded-xl group-hover:opacity-10" />
  <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h1 className="text-2xl font-bold text-white tracking-wider text-center">Netflix</h1>
    <p className="pb-4 pt-2 text-white text-center">React Js</p>
    <a href="#more">
      <p className="text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg"> More Info </p>
    </a>
  </div>
</div>

         </div>
        </div>
     )
}
export default Project;