import React from 'react'
import { MdCastForEducation } from "react-icons/md";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-zinc-900 py-4">
      <div className='flex justify-center'>
        <MdCastForEducation className=" flex text-3xl text-fuchsia-700" />
        <h1 className="text-3xl font-bold text-center text-white">EduCamp</h1>
      </div>
   
      </nav>
    </div>
  )
}

export default Navbar
