import React from 'react'
import {Link} from "react-router-dom";
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';


const Employ = () => {
  return (
    
        <div  >
            <Navbar2 />
            <div>
    
                {/* 1st line */}
                <div className='flex items-center justify-center p-10'>
                    <div className='grid grid-cols-1 items-center justify-center md:grid-cols-2'>
                        <div>
                            <h1 className='text-5xl'>Let's make your next great hire. Fast.</h1>
                            <Link to="">
                                <button className='flex items-center  text-1xl font-bold bg-blue-600 text-white rounded-lg mt-[5rem] px-12 py-4 ' >
                                    Post a job
                                </button>
                            </Link>
                        </div>
                        <Link to="">
                            <img src='/Next.PNG' alt=''
                            width={600}
                            height={600}
                            />
                        </Link>
                    </div>
                </div>
    
    
    
                {/* 2nd line */}
                <div className='flex items-center justify-center p-10'>
                    <div className='grid grid-cols-1 mt-[8rem] gap-10 md:grid-cols-3'>
                        <div className='border-[1px] max-w-[350px] rounded-xl p-8'>
                            <p className='text-[#2557a7] text-2xl font-bold mb-8'>1</p>
                            <h2 className='font-bold mb-4 text-2xl'>Create your free account</h2>
                            <span>All you need is your email address to create an account and start building your job post.</span>
                        </div>
                        <div className='border-[1px] max-w-[350px] rounded-xl p-8'>
                            <p className='text-[#2557a7] text-2xl font-bold mb-8'>2</p>
                            <h2 className='font-bold mb-4 text-2xl'>Build your job post</h2>
                            <span>Then just add a title, description, and location to your job post, and you're ready to go.</span>
                        </div>
                        <div className='border-[1px] max-w-[350px] rounded-xl p-8'>
                            <p className='text-[#2557a7] text-2xl font-bold mb-8'>3</p>
                            <h2 className='font-bold mb-4 text-2xl'>Post your job</h2>
                            <span>After you post your job use our state of the art tools to help you find dream talent.</span>
                        </div>
                    </div>
                </div>
    
                {/* 3rd line */}
                <div className='bg-gray-100  py-[4rem] md:p-[10rem] md:pb-[30rem] mt-[8rem] md '>
                    <div className='flex items-center justify-center p-10'>
                        <div className='w-[300px]  md:w-[800px] '>
                            <div className=''>
                                <h1 className='font-bold text-3xl mb-10 '>Save time and effort in your hiring journey.</h1>
                                <p className=''>Finding the best fit for the job shouldn’t be a full-time job. Indeed’s simple and powerful tools let you source, screen, and hire faster.</p>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                {/* 4th line */}
                <div className='flex items-center justify-center '>
                    <div className='md:border-[1px]  md:mt-[-25rem] bg-white md:w-[1200px] rounded-sm '>
                        <div className='flex items-center justify-center p-10'>
                            <div className='grid md:grid-cols-2'>
                                {/* inner */}
                                <div className='flex flex-col-2 gap-6 mb-[6rem]'>
                                    <img src='/pin 1.PNG' alt=''
                                     width={80}
                                    height={100}
                                  />
                                    <div className='w-[350px]'>
                                         <h2 className='font-bold text-2xl mb-4'>Get more visibility</h2>
                                        <p className='text-[#2557A7] font-semibold'><Link to="">Sponsor your job</Link> <span className='text-black font-light'>to ensure it gets seen by the right people</span></p>
                                    </div>
                    
                    
                                </div>
                                <div className='flex flex-col-2 gap-6 mb-[6rem]'>
                                    <img src='/pin2.PNG' alt=''
                                     width={90}
                                    height={100}
                                  />
                                    <div className='w-[350px]'>
                                         <h2 className='font-bold text-2xl mb-4'>Find quality applicants</h2>
                                        <p className=''>List your required skills for the job so relevant candidates apply.</p>
                                    </div>
                    
                    
                                </div>
                                <div className='flex flex-col-2 gap-6 mb-[6rem]'>
                                    <img src='/pin 3.PNG' alt=''
                                     width={90}
                                    height={100}
                                  />
                                    <div className='w-[350px]'>
                                         <h2 className='font-bold text-2xl mb-4'>Verify their abilities</h2>
                                        <p>Add screener questions and assessments to test applicants’ skills.</p>
                                    </div>
                    
                    
                                </div>
                                <div className='flex flex-col-2 gap-6 mb-[6rem]'>
                                    <img src='/pin 4.PNG' alt=''
                                     width={90}
                                    height={100}
                                  />
                                    <div className='w-[350px]'>
                                         <h2 className='font-bold text-2xl mb-4'>Organize your candidates</h2>
                                        <p>View and sort resumes, send messages, and schedule interviews—all on Indeed. </p>
                                    </div>
                    
                    
                                </div>
                            </div>
                        </div>
    
                        {/* 5th line */}
                        <div className='flex flex-col mr-6 md:flex-row items-center justify-center'>
    
                            <Link to="">
                                <button className='flex items-center  text-1xl font-bold bg-blue-600 text-white rounded-lg mr-6  px-11 py-4 ' >
                                    Get started
                                </button>
                            </Link>
                            <div className='ml-[10rem] md:ml-[2px] mt-6 md:mt-[-6px]'>
                                <p className=''>You control your posts 24/7—edit, add, pause, or close them whenever you want.<Link to=""><span       className='font-bold text-blue-600'>Learn more about posting</span></Link></p>
                            </div>
                        </div>
    
    
                        {/* 6th line */}
                        <div className='flex items-center justify-center mt-[15rem] w-[500px] md:w-full'>
                            <div>
                                <h1 className='flex items-center justify-center text-2xl md:text-4xl font-bold '>Want to fill your job faster? Sponsor it.</h1>
                                <p className=' text-sm w-[400px] ml-8  '>Sponsored Jobs are over 4.5X more likely to result in a hire. Pick the daily budget that works for you; pay only for people clicking on your post.</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                {/* img scene */}
                <div className='flex items-center justify-center mt-[8rem]'>
                    <div className='flex flex-col'>
                        <img src='/dollars.PNG' alt=''
                        
                        width={600}
                        height={600}
                        />
                        <p className=' text-sm w-[450px] md:w-[600px] ml-8'>The daily budget and the number of applicants per week are shown for demonstration purposes only. Actual budget and applicants will vary by job title and location.</p>
                    </div>
                </div>
    
                {/* company */}
                <div>
                    <div className='flex items-center justify-center mt-[10rem]'>
                        <div>
                            <h1 className='flex items-center justify-center text-2xl font-bold md:text-4xl  '>You're in good company.</h1>
                            <p className='text-2xl w-[400px] md:w-[800px] mt-10'>Over 3,500,000 companies use Indeed to hire. See why these amazing companies use us as their platform to hire dream talent.</p>
                        </div>
                    </div>
    
                    {/* cart */}
                    <div className='flex flex-col md:flex-row items-center justify-center md:gap-5 '>
    
    
                        
                        <div className=' border-[1px] w-[300px] rounded-xl py-[5rem] shadow-xl mt-[4rem] '>
                            <div className='flex flex-col items-center justify-center'>
                                <img src='/mem.PNG' alt=''
                    
                                width={100}
                                height={100}
                                />
                                <p className='p-4 mt-12'>Indeed helps the world’s largest family restaurant business to recruit high quality candidates for its hard-to-fill positions.</p>
                            </div>
                        </div>
                        
    
    
                        
                        <div className=' border-[1px] w-[300px] rounded-xl py-[55px] shadow-xl mt-[4rem] '>
                            <div className='flex flex-col items-center justify-center'>
                                <img src='/university.PNG' alt=''
                    
                                width={100}
                                height={100}
                                />
                                <p className='p-4 mt-12'>The second oldest university in the world uses Indeed to draw targeted jobseeker traffic to fill both niche academic positions and corporate support roles.</p>
                            </div>
                        </div>
                        
    
    
                        
                        <div className=' border-[1px] w-[300px] rounded-xl py-[7rem] shadow-xl mt-[4rem] '>
                            <div className='flex flex-col items-center justify-center '>
                                <img src='/nokia.PNG' alt=''
                    
                                width={100}
                                height={100}
                                />
                                <p className='p-4 mt-[3rem] '>The world leader in mobile communications uses Indeed Sponsored Jobs to lower its cost per applicant and cost per hire.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
    
    
                {/* workmanship */}
    
                <div className='mt-[10rem] '>
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className=' bg-[#0d2d5e] md:w-6/12 '>
                            <div className='flex flex-col justify-center px-[7rem] py-[8rem]'>
                                <p className='w-[400px] text-white font-bold ml-[-2rem] text-2xl md:text-4xl'>I've used other websites in the past for hiring; nothing has ever been this easy, this simple, and this effective."</p>
                                <span className='text-white text-lg mt-8'>Darrell</span>
                            </div>
                        </div>
    
                        <img src='/workman.PNG' alt=''
                                className=''
                             width={700}
                            height={700}
                         />
    
    
                    </div>
                </div>
    
    
                {/* last line */}
                <div className='bg-gray-100 mb-[-8rem]'>
                    <div >
                        <div className='flex items-center justify-center'>
                            <div className='mt-[10rem] pb-60' >
                                <h1 className='text-2xl md:text-4xl font-extrabold'>Get started in minutes!</h1>
                                <Link to="">
                                    <button className='flex ml-8 md:ml-[6rem] items-center mt-[4rem]  text-1xl font-bold bg-blue-600 text-white rounded-lg  px-12 py-4 ' >
                                        Start posting
                                    </button>
                                </Link>
                                <p className=' text-xs ml-[3rem] mt-8 md:ml-[7rem]'>1. Indeed data (worldwide)</p>
                            </div>
                        </div>
                    </div>
                </div>
    
    
    
                
    
    
            </div>
            <Footer />
        </div>
      
  )
}

export default Employ;