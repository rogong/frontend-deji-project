"use client"
import {Link} from "react-router-dom"
import React, { useState } from 'react'
import { BiSolidUser} from "react-icons/bi"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose, AiFillProfile} from "react-icons/ai"
import { TbMathGreater } from "react-icons/tb"
import { MdMessage, MdWorkspacePremium, MdReviews, MdSettingsSuggest} from "react-icons/md"
import { IoMdNotifications, IoMdPerson,  IoIosHelpCircle } from "react-icons/io"





const Navbar2 = () => {
    const[toggle, setToggle]=useState(false);
    const[open, setOpen]=useState(false);

  return (
    <div className=' flex items-center px-5 py-5 justify-between shadow-sm'>
        <div className='flex items-center justify-center'>
        <Link to="/">
            <img src="/logo.png"
            width={100}
            height={100}
            alt="logo" />
        </Link>

        

        <Link to="/Findjob"><span className="hidden md:flex ml-3 hover:underline underline-offset-[2rem] hover:text-[#2557a7]">Find Job</span></Link>
        <Link to="/Company"><span className='hidden md:flex ml-3 hover:underline underline-offset-[2rem] hover:text-[#2557a7]'>Company reviews</span></Link>
        </div>
  
        <div className='flex items-center justify-center'>

            <div className="flex items-center justify-center gap-8 mr-6">
                <Link  to='/Messages' className="hover:bg-[#ccd2d7] px-2 py-2 hover:text-[#2557a7] rounded-lg "><MdMessage size={25} /></Link>
                <Link to='/Notification' className="hover:bg-[#ccd2d7] px-2 py-2 hover:text-[#2557a7]  rounded-lg"><IoMdNotifications size={25} /></Link>
                <Link to='' onClick={() => setOpen(!open)} className="relative hidden md:flex hover:bg-[#ccd2d7] px-2 py-2 hover:text-[#2557a7]  rounded-lg    "><IoMdPerson size={25}/></Link>

                {open &&<div className="absolute top-[50px] right-[13rem] bg-white border-2 rounded-lg shadow-xl">
                    <div className="px-[20px]">

                        <div className="mt-4 font-bold text-lg">Adeyanjujoshua12@gmail.com</div>


                        <Link to="/Profile">
                            <div className="flex items-center text-lg gap-4 pt-6">
                                <AiFillProfile size={25} />
                                <span>Profile</span>
                            </div>
                        </Link>

                        <Link to="/MyJob">
                            <div className="flex items-center gap-4 mt-6 text-lg ">
                                <MdWorkspacePremium size={25} />
                                <span>My jobs</span>
                            </div>
                        </Link>

                        <Link to="/Reviews">
                            <div className="flex items-center text-lg gap-4 mt-6">
                                <MdReviews size={25} />
                                <span>My reviewies</span>
                            </div>
                        </Link>

                        <Link to="/Settings">
                            <div className="flex items-center text-lg gap-4 mt-6">
                                <MdSettingsSuggest size={25} />
                                <span>Settings</span>
                            </div>
                        </Link>

                        <Link to="/Helpcenter">
                            <div className="flex items-center text-lg gap-4 mt-6 hover:bg-blue-100/50 min:w-full">
                                <IoIosHelpCircle size={25} />
                                <span>Help center</span>
                            </div>
                        </Link>
                    </div>

                    <button className="border-[1px] px-[8rem] py-3 font-bold mt-8 hover:bg-blue-100/50">Sign out</button>
                </div>}
        
            </div>


            <span className="hidden md:flex border-1 h-8 w-[1px] bg-gray-200 mr-6 "></span>

            <Link to="/Employ">
            <span className='hidden md:flex hover:underline cursor-pointer underline-offset-[2rem] hover:text-[#2557a7]'>Employers/ <span>Post Job</span>
            </span>
            </Link>

            <Link to="">
                <button className='hidden  items-center  text-1xl font-bold bg-blue-600 text-white rounded-lg px-3 py-1 md:hidden' >
                    <span  className='mr-2'><BiSolidUser/></span>
                    Sign in
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

export default Navbar2;