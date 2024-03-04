import {Link} from "react-router-dom"
import React, { useState } from 'react'








const Navbar = () => {

  const[toggle, setToggle]=useState(false)

  return (
    <div className='flex items-center px-5 py-6 justify-between shadow-sm'>
      <div className='flex items-center justify-center'>
        <Link to="/">
          <img src="/logo.png"
          width={100}
          height={100}
          alt="logo" />
        </Link>

       

        <Link to="/Findjob"><span className="hidden md:flex ml-3 hover:underline underline-offset-[2rem] hover:text-[#2557a7]  ">Find Job</span></Link>
        <Link to="/Company"><span className='hidden md:flex ml-3 hover:underline underline-offset-[2rem] hover:text-[#2557a7]'>Company reviews</span></Link>
      </div>
    
      
     
      

      




    </div>
  )
}

export default Navbar