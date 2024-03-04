import React from 'react';
import {Link} from "react-router-dom";
import { GrSearch} from "react-icons/gr";
import {AiOutlineStar} from "react-icons/ai";

import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';




const Company = () => {
  return (
    <div>
      <Navbar2 />
      <div className=' items-center justify-center'>
        <div className='ml-[-1rem] md:ml-[-4]'>
          <div className=' mb-[-4.5rem] mt-[4em] leading-10 ml-[2em] md:ml-[9em]'>
            <h1 className='text-4xl font-bold'>Find great place to work</h1>
            <p>Get access to millions of company reviews</p>
            <h4 className='font-bold'>Company name or job title</h4>
          </div>
          <div className='items-center justify-center p-[4rem] md:flex '>
            <div className='w-[28rem] ml-[-2rem] md:w-[700px] mt-3 md:ml-4'>
              <div className=' flex items-center ml-[6] border-indigo-500/75 hover:box-content border-2 rounded-lg p-3 py-2 md:shadow-sm'>
                <input className=' flex-grow  text-gray-600 pl-5 bg-transparent outline-none' type="text"
                placeholder='Job title,keywords,or company'/>
                <GrSearch className="cursor-pointer mx-auto md:ml-[8rem]"/>
              </div>
            </div>
      
            <button className='bg-[#2557a7] rounded-lg p-2  text-white font-bold border-2 mt-3 w-[28rem] ml-[-2rem] outline-slate-1500 md:ml-2 md:w-[300px]'>Find jobs</button>
          </div>
          <Link className=' flex items-center justify-center  ' to="/"><span className='text-[#2557a7]  '>Do you want to search for salaries?</span></Link>
        </div>
        {/* cart */}
        <div className='flex item-center ml-4 md:justify-center md:ml-[-5rem] '>
          <div>
            <h2 className='text-3xl font-bold mt-8' >Popular Companies</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  items-center justify-center gap-8 mt-8'>
      
              <Link to="">
                <div className='mb-8 border-b-[1px] sm:border-b-[1px] md:border-none '>
                  <div className='flex item-center gap-4 '>
                    <img src="/image/piece.jpg"
                    className='shadow-lg rounded-lg'
                      width={60}
                      height={60}
                      alt="sticker"
                    />
                    <div className='flex flex-col'>
                      <h2 className='font-bold mb-2 '>Schlumberger</h2>
                      <div className='flex gap-2 items-center justify-center'>
                        <div className='flex flex-row text-[#9d2b6b] '><AiOutlineStar size={25}  /><AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25} /></div>
                        <span className='text-sm text-[#2557a7]'>7,726 reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center mt-4 mb-[3rem]  text-sm cursor-pointer '>
                    <span className='hover:underline'>Salaries</span>
                    <span className='hover:underline'>Q&A</span>
                    <span className='hover:underline'>Open jobs</span>
                  </div>
                </div>
              </Link>
      
              <Link to="">
                <div className='mb-8 border-b-[1px] sm:border-b-[1px] md:border-none'>
                  <div className='flex item-center gap-4 '>
                    <img src="/image/jonty.jpg"
                    className='shadow-lg rounded-lg'
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className='flex flex-col'>
                      <h2 className='font-bold mb-2 '>Palmpay</h2>
                      <div className='flex gap-2 items-center justify-center'>
                        <div className='flex flex-row text-[#9d2b6b] '><AiOutlineStar size={25}  /><AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25} /></div>
                        <span className='text-sm text-[#2557a7]'>7,726 reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center mt-4 mb-[3rem] text-sm cursor-pointer '>
                    <span className='hover:underline'>Salaries</span>
                    <span className='hover:underline'>Q&A</span>
                    <span className='hover:underline'>Open jobs</span>
                  </div>
                </div>
              </Link>
              <Link to="">
                <div className='mb-8 border-b-[1px] sm:border-b-[1px] md:border-none'>
                  <div className='flex item-center gap-4 '>
                    <img src="/image/piece.jpg"
                    className='shadow-lg rounded-lg'
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className='flex flex-col '>
                      <h2 className='font-bold mb-2 '>Nestle</h2>
                      <div className='flex gap-2 items-center justify-center'>
                        <div className='flex flex-row text-[#9d2b6b] '><AiOutlineStar size={25}  /><AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25} /></div>
                        <span className='text-sm text-[#2557a7]'>6000, reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center mt-4 mb-[3rem] text-sm cursor-pointer '>
                    <span className='hover:underline'>Salaries</span>
                    <span className='hover:underline'>Q&A</span>
                    <span className='hover:underline'>Open jobs</span>
                  </div>
                </div>
              </Link>
              <Link to="">
                <div className='mb-8 border-b-[1px] sm:border-b-[1px] md:border-none'>
                  <div className='flex item-center gap-4 '>
                    <img src="/image/jonty.jpg"
                    className='shadow-lg rounded-lg'
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className='flex flex-col'>
                      <h2 className='font-bold mb-2 '>Access bank plc</h2>
                      <div className='flex gap-2 items-center justify-center'>
                        <div className='flex flex-row text-[#9d2b6b] '><AiOutlineStar size={25}  /><AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25} /></div>
                        <span className='text-sm text-[#2557a7]'>800 reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center mt-4 mb-[3rem] text-sm cursor-pointer '>
                    <span className='hover:underline'>Salaries</span>
                    <span className='hover:underline'>Q&A</span>
                    <span className='hover:underline'>Open jobs</span>
                  </div>
                </div>
              </Link>
      
              <Link to="">
                <div className='mb-8 border-b-[1px] sm:border-b-[1px] md:border-none'>
                  <div className='flex item-center gap-4 '>
                    <img src="/image/Case.jpg"
                    className='shadow-lg rounded-lg'
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className='flex flex-col'>
                      <h2 className='font-bold mb-2 '>National Hospital Abuja</h2>
                      <div className='flex gap-2 items-center justify-center'>
                        <div className='flex flex-row text-[#9d2b6b] '><AiOutlineStar size={25}  /><AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25} /></div>
                        <span className='text-sm text-[#2557a7]'>9,526 reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center mt-4 mb-[3rem] text-sm cursor-pointer '>
                    <span className='hover:underline'>Salaries</span>
                    <span className='hover:underline'>Q&A</span>
                    <span className='hover:underline'>Open jobs</span>
                  </div>
                </div>
              </Link>
              <Link to="">
                <div className='mb-8 border-b-[1px] sm:border-b-[1px] md:border-none'>
                  <div className='flex item-center gap-4 '>
                    <img src="/image/piece.jpg"
                    className='shadow-lg rounded-lg'
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className='flex flex-col'>
                      <h2 className='font-bold mb-2 '>Union Bank Of Nigeria</h2>
                      <div className='flex gap-2 items-center justify-center'>
                        <div className='flex flex-row text-[#9d2b6b] '><AiOutlineStar size={25}  /><AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25} /></div>
                        <span className='text-sm text-[#2557a7]'>70, reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center mt-4 mb-[3rem] text-sm cursor-pointer '>
                    <span className='hover:underline'>Salaries</span>
                    <span className='hover:underline'>Q&A</span>
                    <span className='hover:underline'>Open jobs</span>
                  </div>
                </div>
              </Link>
              <Link to="">
                <div className='mb-8 border-b-[1px] sm:border-b-[1px] md:border-none'>
                  <div className='flex item-center gap-4 '>
                    <img src="/image/jonty.jpg"
                    className='shadow-lg rounded-lg'
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className='flex flex-col'>
                      <h2 className='font-bold mb-2 '>Shell</h2>
                      <div className='flex gap-2 items-center justify-center'>
                        <div className='flex flex-row text-[#9d2b6b] '><AiOutlineStar size={25}  /><AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25} /></div>
                        <span className='text-sm text-[#2557a7]'>80, reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center mt-4 mb-[3rem] text-sm cursor-pointer '>
                    <span className='hover:underline'>Salaries</span>
                    <span className='hover:underline'>Q&A</span>
                    <span className='hover:underline'>Open jobs</span>
                  </div>
                </div>
              </Link>
              <Link to="">
                <div className='mb-8 border-b-[1px] sm:border-b-[1px] md:border-none'>
                  <div className='flex item-center gap-4 '>
                    <img src="/image/piece.jpg"
                    className='shadow-lg rounded-lg'
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className='flex flex-col'>
                      <h2 className='font-bold mb-2 '>Sterline Oil Exploration </h2>
                      <div className='flex gap-2 items-center justify-center'>
                        <div className='flex flex-row text-[#9d2b6b] '><AiOutlineStar size={25}  /><AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25} /></div>
                        <span className='text-sm text-[#2557a7]'>10,000, reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center mt-4 mb-[3rem] text-sm cursor-pointer '>
                    <span className='hover:underline'>Salaries</span>
                    <span className='hover:underline'>Q&A</span>
                    <span className='hover:underline'>Open jobs</span>
                  </div>
                </div>
              </Link>
              <Link to="">
                <div className='mb-8 border-b-[1px] sm:border-b-[1px] md:border-none'>
                  <div className='flex item-center gap-4 '>
                    <img src="/image/piece.jpg"
                    className='shadow-lg rounded-lg'
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className='flex flex-col'>
                      <h2 className='font-bold mb-2 '>FH1360</h2>
                      <div className='flex gap-2 items-center justify-center'>
                        <div className='flex flex-row text-[#9d2b6b] '><AiOutlineStar size={25}  /><AiOutlineStar size={25}/><AiOutlineStar size={25}/><AiOutlineStar size={25} /></div>
                        <span className='text-sm text-[#2557a7]'>30, reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center mt-4 mb-[3rem] text-sm cursor-pointer '>
                    <span className='hover:underline'>Salaries</span>
                    <span className='hover:underline'>Q&A</span>
                    <span className='hover:underline'>Open jobs</span>
                  </div>
                </div>
              </Link>
          </div>
      
      
          </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Company;