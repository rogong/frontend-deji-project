
import React, { useState } from 'react'
import { BiSolidUser} from "react-icons/bi"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose} from "react-icons/ai"
import { TbMathGreater } from "react-icons/tb"
import { Link } from 'react-router-dom'






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
    
      <div className='flex items-center'>
          <Link to="/signin"><span className='hidden md:flex mr-10 font-bold text-[#2557a7]  hover:underline underline-offset-[2rem]'>Sign in </span></Link>
            
          <div></div>
          <Link to="/Employ">
            <span className='hidden md:flex hover:underline cursor-pointer underline-offset-[2rem] hover:text-[#2557a7]'>Employers/ <span>Post Job</span>
            </span>
          </Link>
          <Link to="/sign-in">
              <button className='flex items-center  text-1xl font-bold bg-blue-600 text-white rounded-lg px-3 py-1 md:hidden' >
                <span  className='mr-2'><BiSolidUser/></span>
                  Signin
              </button>
            </Link>
          <FiMenu onClick={()=>setToggle(!toggle)} className="text-2xl ml-2 md:hidden"/>
          <span></span>
      </div>
     
      {/* mobile menu */}
      {/* overlay */}
      {toggle ? <div className='bg-white/80 fixed w-full h-screen z-10
      top-0 left-0'></div> : ''}
      

      {/* side drawer menu */}

      <div className={toggle ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300' :
       'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={()=>setToggle(!toggle)}  size={25} className="absolute mt-4 right-4 md:hidden"/>

          <Link to='/Findjob'>
            <div className=' flex items-center mt-16 justify-between text-1xl p-4 font-bold md:hidden border-t-2'>
              <h3>Find jobs</h3>
              <TbMathGreater/>
            </div>
          </Link>

          <Link to='/Reviews'>
            <div className=' flex items-center mt-4 justify-between text-1xl p-4 font-bold md:hidden border-t-2' >
              <h3>Companys reviews</h3>
              <TbMathGreater/>
            </div>
          </Link>

          <Link to='/Employers'>
            <div className=' flex items-center mt-4 justify-between text-1xl p-4 font-bold md:hidden border-t-2'>
              <h3>Employers</h3>
              <TbMathGreater/>
            </div>
          </Link>

          <Link to=''>
            <div className=' flex items-center mt-4 justify-between text-1xl p-4 font-bold md:hidden border-t-2'>
              <h3>Create your Cv</h3>
              <TbMathGreater/>
            </div>
          </Link>

          <Link to=''>
            <div className=' flex items-center mt-4 justify-between text-1xl p-4 font-bold border-t-2 md:hidden'>
              <h3>Change Country</h3>
              <TbMathGreater/>
            </div>
          </Link>

          <Link to='/Helpcenter'>
            <div className=' flex items-center mt-4 justify-between text-1xl p-4 font-bold md:hidden border-t-2'>
              <h3>Help Center</h3>
              <TbMathGreater/>
            </div>
          </Link> 

      </div>




    </div>
  )
}

export default Navbar;