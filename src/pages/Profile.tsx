import React from 'react'
import {Link} from 'react-router-dom';
import Navbar2 from '../components/Navbar2';


const Profilepage
 = () => {
  return (
    <div>
        <Navbar2 />
        <div className='mt-[5rem]'>
            <div className='flex flex-col items-center justify-center' >
                <div className='md:border-[1px] px-6 p-4 rounded-lg '>
                    <h1 className='font-bold text-3xl '>Add a resume to indeed</h1>
                    <div className='md:flex items-center justify-center '>
                        <Link to="">
                            <button className='flex mb-2 items-center text-1xl font-bold mt-[1.5rem] bg-blue-600 text-white rounded-lg px-36 md:px-[5.2rem] py-4 ' >
                                Upload resume
                            </button>
                        </Link>
                        <Link to="">
                            <button className='flex items-center text-1xl font-bold mt-4 md:ml-2 bg-blue-600 text-white rounded-lg px-[6.8rem] md:px-12 py-4 ' >
                                Build an indeed Resume
                            </button>
                        </Link>
                    </div>
                         <p className='mt-8  text-sm'>By continuing, you agree to receive job opportunities from Indeed.</p>
                </div>
                <div>
                    <Link to="" className='flex items-center justify-center'>
                        <button className=' hover:bg-blue-50 font-bold p-2  rounded-lg text-[#2557a7]  mt-[3rem]'>
                            Skip for now
                        </button>
                    </Link>
        
                    <p className='mb-[-8rem] mt-[8rem]  text-xs'>©2023 Indeed - Cookies, Privacy and Terms</p>
        
                </div>

                <div>
               
                </div>
        
        
        
        
        
            </div>
        </div>
       
    </div>
  )
}

export default Profilepage;
