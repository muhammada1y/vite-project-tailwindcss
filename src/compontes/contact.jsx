import React from "react";

function Contact(){
   return(
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-blue-400">Contact</h1>
      <form method="POST" action="https://getform.io/f/44dd27b4-03ad-4934-9f41-fa38804e0dd2" encType="mutipart/form-data">
       <div className="grid md:grid-cols-2  gap-4 w-full py-2">
        <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input className="border-2 rounded-l p-3 flex border-gray-300" type="text" name="name"/>
        </div>
        <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone number</label>
            <input className="border-2 rounded-l p-3 flex border-gray-300" type="number" name="cell-number"/>
        </div>
        <div className="flex flex-col py-2 col-span-2">
            <label className="uppercase text-sm py-2 ">Email</label>
            <input className="border-2 rounded-l p-3 flex border-gray-300" type="email" name="email"/>
        </div>
        <div className="flex flex-col py-2 col-span-2">
            <label  className="uppercase text-sm py-2 ">Subject</label>
            <input className="border-2 rounded-l p-3 flex border-gray-300"  type="text" name="subject"/>
        </div>
        <div className="flex flex-col py-2 col-span-2">
            <label className="uppercase text-sm py-2 ">Massage</label>
          <textarea className="border-2 rounded-l p-3 flex border-gray-300" rows={10} name="massage"></textarea>
        </div>
        <button className="bg-blue-400 text-white w-full mt-4 p-4 col-span-2 ">
            Send Massage
        </button>
       </div>
      </form>
    </div>
   )
}
export default Contact;