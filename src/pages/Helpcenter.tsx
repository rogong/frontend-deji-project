
"use client"
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose} from "react-icons/ai";
import { TbMathGreater } from "react-icons/tb";
import { GrSearch } from "react-icons/gr";
import Navbar3 from "../components/Navbar3"
import Footer from "../components/Footer";



const Helpcenterpage = () => {

  const[toggle, setToggle]=useState(false)


  return (
    <div >
      <Navbar3 />
      <div className="bg-gray-50 py-2">
        <div className='flex items-center px-5 py-2 justify-between '>
          <div className='flex items-center justify-center'>
            <Link to="/" className='font-bold text-2xl hover:scale-105 transition-transform duration-200 ease-in-out'>Job Seeker Help Center</Link>
        
            <div className="flex items-center justify-center gap-6 ml-4 text-gray-500">
              <Link to="/Findjob"><span className="hidden md:flex ml-3 ">Topics</span></Link>
              <Link to="/Company"><span className='hidden md:flex ml-3 hover:underline underline-offset-2 hover:text-blue-600'>Find Job</span></Link>
              <Link to="/Company"><span className='hidden md:flex ml-3 hover:underline underline-offset-2 hover:text-blue-600'>Career Guides</span></Link>
              <Link to="/Company"><span className='hidden md:flex ml-3 hover:underline underline-offset-2 hover:text-blue-600'>Employer Help Center</span></Link>
            </div>
          </div>
        
          <div className='flex items-center'>
        
              <FiMenu onClick={()=>setToggle(!toggle)} className="text-2xl ml-2 md:hidden"/>
        
          </div>
        
          {/* mobile menu */}
          {/* overlay */}
          {toggle ? <div className='bg-white/80 fixed w-full h-screen z-10
          top-0 left-0'></div> : ''}
        
          {/* side drawer menu */}
          <div className={toggle ? 'fixed top-20 right-0 w-[300px] h-screen bg-white z-10 duration-300' :
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
        <div className="flex items-center justify-center mt-[3rem] pb-6">
          <div className='w-[350px] md:w-[500px]'>
            <div className=' flex items-center border-black hover:box-content border-2 rounded-lg p-3 py-2 md:shadow-sm'>
              <input className=' flex-grow w-full  text-gray-600 pl-5 bg-transparent focus:outline-none' type="text"
                placeholder='Search job seeker how-to tips'/>
                <GrSearch className="cursor-pointer mx-auto md:ml-[8rem]"/>
            </div>
          </div>
          <Link to=''><button className='bg-[#2557a7] rounded-lg p-2  text-white font-bold border-2 outline-slate-1500 w-[100px]'>Search</button></Link>
        </div>
      </div>


      {/* card pages */}

      <div className="p-4 md:p-8 " >
        <div className="grid md:grid-cols-2 md:gap-4 ">
          <div className="mt-8">
            <div className="border-[1.3px] rounded-lg  p-6">
              <img
                src='/Avita 1.PNG'
                alt=''
                className="pb-4"
                width={80}
                height={80}>
              </img>
              <h2 className="font-bold text-2xl pb-2">My Indeed Account</h2>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">How Do I Close My Account?</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">How Do I Reset My Password?</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">I Can't Sign Into My Account</p></Link>
        
              <Link to=""><p className="font-bold text-1xl mt-5 text-blue-600 hover:underline cursor-pointer">Explore more article</p></Link>
            </div>
          </div>
          <div className="mt-4 md:mt-8">
            <div className="border-[1.3px] rounded-lg  p-6">
              <img
                src='/Avita 2.PNG'
                alt=''
                className="pb-4"
                width={80}
                height={80}>
              </img>
              <h2 className="font-bold text-2xl pb-2">About Indeed</h2>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Indeed’s Mobile Apps: What You Need to Know</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">About Jobs on Indeed: What You Need to Know</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Why is Indeed collecting demographic data from job seekers?</p></Link>
        
              <Link to=""><p className="font-bold text-1xl mt-5 text-blue-600 hover:underline cursor-pointer md:pb-2">Explore more article</p></Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-[1.3px] rounded-lg  p-6">
              <img
                src='/Avita 3.PNG'
                alt=''
                className="pb-4"
                width={80}
                height={80}>
              </img>
              <h2 className="font-bold text-2xl pb-2">About Indeed</h2>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">How Do I See All Reviews on Company Pages?</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Company Reviews: Best Practices, Policies, and Guidelines</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">How to Add and Delete your Company Reviews</p></Link>
        
              <Link to=""><p className="font-bold text-1xl mt-5 text-blue-600 hover:underline cursor-pointer">Explore more article</p></Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-[1.3px] rounded-lg  p-6">
              <img
                src='/Avita 4.PNG'
                alt=''
                className="pb-4"
                width={80}
                height={80}>
              </img>
              <h2 className="font-bold text-2xl pb-2">Job Alerts</h2>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3 md:pb-[6.7rem]">Starting, Stopping, and Managing Job Alerts</p></Link>
        
            </div>
          </div>
          <div className="mt-4">
            <div className="border-[1.3px] rounded-lg  p-6">
              <img
                src='/Avita 5.PNG'
                alt=''
                className="pb-4"
                width={80}
                height={80}>
              </img>
              <h2 className="font-bold text-2xl pb-2">Job Search Tips</h2>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Improving Your Job Searches (Tips and Help)</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Guidelines for Safe Job Search</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">How to Report a Job</p></Link>
        
              <Link to=""><p className="font-bold text-1xl mt-5 text-blue-600 hover:underline cursor-pointer">Explore more article</p></Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-[1.3px] rounded-lg  p-6">
              <img
                src='/Avita 6.PNG'
                alt=''
                className="pb-4"
                width={80}
                height={80}>
              </img>
              <h2 className="font-bold text-2xl pb-2">Indeed Resume</h2>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">FAQs: Creating, Uploading, and Managing a Resume</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Uploading or Replacing a Resume File</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Resume Builder: Create or Convert a Resume</p></Link>
        
              <Link to=""><p className="font-bold text-1xl mt-5 text-blue-600 hover:underline cursor-pointer">Explore more article</p></Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-[1.3px] rounded-lg  p-6">
              <img
                src='/Avita 7.PNG'
                alt=''
                className="pb-4"
                width={80}
                height={80}>
              </img>
              <h2 className="font-bold text-2xl pb-2">Applying for a Job</h2>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">FAQs: Writing Cover Letters (Career Guide Templates and Tips)</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">How to Apply to a Job on Indeed</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">FAQs: Adding, Uploading, and Submitting Cover Letters</p></Link>
        
              <Link to=""><p className="font-bold text-1xl mt-5 text-blue-600 hover:underline cursor-pointer md:pb-10">Explore more article</p></Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-[1.3px] rounded-lg  p-6">
              <img
                src='/Avita 8.PNG'
                alt=''
                className="pb-4"
                width={80}
                height={80}>
              </img>
              <h2 className="font-bold text-2xl pb-2">Indeed Assessments</h2>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">What are Self-Serve Assessments?</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">FAQs: Employer Assessments</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">FAQs: Self-Serve Assessments</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Retaking an Indeed Assessment</p></Link>
        
              <Link to=""><p className="font-bold text-1xl mt-5 text-blue-600 hover:underline cursor-pointer">Explore more article</p></Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-[1.3px] rounded-lg  p-6">
              <img
                src='/Avita 9.PNG'
                alt=''
                className="pb-4"
                width={80}
                height={80}>
              </img>
              <h2 className="font-bold text-2xl pb-2">Technical Support</h2>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Desktop Browsers: Clearing Chrome and Safari Cache and Cookies</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Mobile Apps: Crashes, Freezes, and Performance Issues</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Mobile Browsers: Clearing Chrome and Safari's Cache and Cookies</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">My web browser is not up to date. How can I get the latest version?</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Troubleshooting 2-step Verification</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Troubleshooting Device Issues With Indeed Interview</p></Link>
        
              <Link to=""><p className="font-bold text-1xl mt-5 text-blue-600 hover:underline cursor-pointer">Explore more article</p></Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-[1.3px] rounded-lg  p-6">
              <img
                src='/Avita 10.PNG'
                alt=''
                className="pb-4"
                width={80}
                height={80}>
              </img>
              <h2 className="font-bold text-2xl pb-2">Career Services</h2>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">What are Self-Serve Assessments?</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Instant Resume Scan</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Resume Review</p></Link>
        
        
              <Link to=""><p className="font-bold text-1xl mt-5 text-blue-600 hover:underline cursor-pointer md:pb-[8.3rem]">Explore more article</p></Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-[1.3px] rounded-lg  p-6">
              <img
                src='/Avita 11.PNG'
                alt=''
                className="pb-4"
                width={80}
                height={80}>
              </img>
              <h2 className="font-bold text-2xl pb-2">Accessibility</h2>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Screen Reader Compatibility</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Keyboard</p></Link>
              <Link to=""> <p className="text-[#0d2d5e] underline pb-3">Contrast and Colors</p></Link>
        
        
              <Link to=""><p className="font-bold text-1xl mt-5 text-blue-600 hover:underline cursor-pointer">Explore more article</p></Link>
            </div>
          </div>
        </div>
      </div>

        <Footer />
    </div>
    

    
  )
}

export default Helpcenterpage