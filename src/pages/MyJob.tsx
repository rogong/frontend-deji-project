import React from 'react';
import {Link} from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';




const Myjobpage = () => {

  
    
  return (
    <div>
        <Navbar2 />
        <div>
            <div className='p-4 md:px-[8rem]'>
                <div>
                    <h1 className='text-2xl font-semibold pb-6'>My jobs</h1>
                    <div className='flex items-center gap-6'>
                        <Link  to="" className='font-bold hover:bg-blue-100 hover:text-blue-500 p-4 '>
                            <div>
                                <span className='text-xs'>0</span>
                                <p className='hover:underline underline-offset-[1.3rem]'>Saved</p>
                            </div>
                        </Link>


                        <Link  to="" className='font-bold hover:bg-blue-100 hover:text-blue-500 p-4 '>
                            <div>
                                <span className='text-xs'>0</span>
                                <p className='hover:underline underline-offset-[1.3rem]'>Applied</p>
                            </div>
                        </Link>


                        <Link  to="" className='font-bold hover:bg-blue-100 hover:text-blue-500 p-4 '>
                            <div>
                                <span className='text-xs'>0</span>
                                <p className='hover:underline underline-offset-[1.3rem]'>Interviews</p>
                            </div>
                        </Link>


                        <Link  to="" className='font-bold hover:bg-blue-100 hover:text-blue-500 p-4 '>
                            <div className='flex flex-col' >
                                <span className='text-xs'>.</span>
                                <p className='hover:underline underline-offset-[1.3rem]'>Applied</p>
                            </div>
                        </Link>
                    </div>
                    <hr className='md:w-[90%]'/>
                </div>

                
            </div>


            <div className='block:flex items-center justify-center hidden'>
                <div>
                    <img
                    src='/Avarta 1.png'
                    alt=''
                    width={250}
                    height={250}
                    className='pb-4'
                    ></img>

                    <div id='' className='flex items-center justify-center ' >
                        <div>
                            <h3 className='font-bold pb-4'>No job saved yet</h3>
                            <p className='text-sm pb-4'>Jobs you save appear here.</p>
                            <div className=''>
                                <Link to=''><button className='font-bold text-[#2557a7] pb-8'>Not seen a job?</button> <br/></Link>
                                <Link to=''><button className='bg-[#2557a7] py-2 px-8  text-white rounded-lg font-bold'>Find job</button></Link>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>


            <div className=' blcok:flex items-center justify-center hidden'>
                <div>
                    <img
                    src='/Avarta 2.png'
                    alt=''
                    width={250}
                    height={250}
                    className='pb-4'
                    ></img>

                    <div id='' className='flex items-center justify-center' >
                        <div>
                            <h3 className='font-bold pb-4'>No application yet</h3>
                            <p className='text-sm pb-4'>Keep track of job applications here.</p>
                            <div className=''>
                                <Link to=''><button className='font-bold text-[#2557a7] pb-8'>Not seen an application?</button> <br/></Link>
                                <Link to=''><button className='bg-[#2557a7] py-2 px-8  text-white rounded-lg font-bold'>Find job</button></Link>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>


            <div className='block:flex items-center justify-center hidden'>
                <div>
                    <img
                    src='/Avarta 3.png'
                    alt=''
                    width={250}
                    height={250}
                    className='pb-4'
                    ></img>

                    <div id='' className='flex items-center justify-center' >
                        <div>
                            <h3 className='font-bold pb-4'>No interview yet</h3>
                            <p className='text-sm pb-4'>Scheduled interviews appear here.</p>
                            <div className=''>
                                <Link to=''><button className='font-bold text-[#2557a7] pb-8'>Not seen an interview?</button> <br/></Link>
                                <Link to=''><button className='bg-[#2557a7] py-2 px-8  text-white rounded-lg font-bold'>Find job</button></Link>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>


            <div className=' block:flex items-center justify-center hidden'>
                <div>
                    <img
                    src='/Avarta 4.png'
                    alt=''
                    width={250}
                    height={250}
                    className='pb-4'
                    ></img>

                    <div id='' className='flex items-center justify-center' >
                        <div>
                            <h3 className='font-bold pb-4'>Something went wrong on our end</h3>
                            <p className='text-sm pb-4'>We’re working to fix it. Please try again later.</p>
                            <div className=''>
                                
                                <Link to=''><button className='bg-[#2557a7] py-2 px-8  text-white rounded-lg font-bold'>Reload the page</button></Link>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Myjobpage;