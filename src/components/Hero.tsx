"use client"
import React, { useState } from 'react'
import { GrSearch} from "react-icons/gr"
import { HiLocationMarker, HiChevronDown } from "react-icons/hi"
import { Link } from 'react-router-dom'



const Hero = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <div className='items-center justify-center p-[4rem] md:flex '>
        <div className='max-w-[480px]  md:w-full md:mt-3  '>
          <div className=' flex items-center border-indigo-500/75 hover:box-content border-2 rounded-lg p-3 py-2 md:shadow-sm'>
            <input className=' flex-grow  text-gray-600 pl-5 bg-transparent outline-none' type="text" 
              placeholder='Job title,keywords,or company'/>
              <GrSearch className="cursor-pointer mx-auto md:ml-[8rem]"/>
          </div>
        </div>


        <div className='max-w-[480px] md:w-full mt-3 md:ml-4 '>
          <div className=' flex items-center border-indigo-500/75 hover:box-content border-2 rounded-lg p-3 py-2 md:shadow-sm'>
            <input className=' flex-grow  text-gray-600 pl-5 bg-transparent outline-none' type="text" 
              placeholder='City state,zip code,or remote '/>
              <HiLocationMarker className="cursor-pointer mx-auto md:ml-[8rem]"/>
          </div>
      </div>


      <Link to=''><button className='bg-[#2557a7] rounded-lg p-2  text-white font-bold border-2 mt-3 w-full outline-slate-1500 md:w-[100px]'>Find jobs</button></Link>

      </div> 
    
      <div className='flex items-center justify-center mt-[-2rem] '>
        <Link to=""><h2 className='font-bold text-[#2557a7] text-1xl ]'>Post your CV</h2></Link> 
        <span>-it only takes a few seconds</span>
      </div>

      <div className='hidden mt-8  md:flex items-center justify-center '>
        <h4>what trending on the indeed</h4>
        <div className='flex flex-col cursor-pointer ml-4 ' onClick={()=>setToggle(!toggle)}>
          <HiChevronDown size={20} />
        </div>
      </div>

      {/* drop dowm links */}

      {toggle ? 
      <div className='invisible border-t-2 mt-5 md:visible duration-400 translate-y-8 '>
      <div className='flex flex-row items-center justify-around text-xs  '>
        {/* 1 */}
        <div className='flex flex-col mt-[-2rem]'>
          <h3 className='font-bold mb-6'>Trending Searches</h3>
          <div className='flex flex-col gap-4 underline text-[#2557a7]'>
            <Link to="/">C Lagos</Link>
            <Link to="/">Engineering Jobs In Lagos</Link>
            <Link to="/">Remote Customer Service Representative Lagos</Link>
            <Link to="/">Control Officer Port Harcourt C</Link>
            <Link to="/">Full Time Kaduna</Link>
            <Link to="/">Yaba</Link>
            <Link to="/">Full Time Delta</Link>
            <Link to="/">Part Time Port Harcourt</Link>
            <Link to="/">Part Time Ibadan</Link>
            <Link to="/">Full Time Ogun</Link>
            <Link to="/">Full Time Osogbo</Link>
            <Link to="/">Jobs In Kano</Link>
            <Link to="/">Imo State</Link>
            <Link to="/">Uyo</Link>
            <Link to="/">Full Time Enugu</Link>
            <Link to="/">Full Time Rivers</Link>
            <Link to="/">Full Time Owerri</Link>
            <Link to="/">Full Time Kwara</Link>
            <Link to="/">Full Time Abeokuta</Link>
            <Link to="/">Job In Abuja</Link>
            <Link to="/">Full Time Warri</Link>
            <Link to="/"> Oyo State</Link>
            <Link to="/">Part Time Lekki</Link>
            <Link to="/"> Full Time Oyo</Link>
            <Link to="/">Osogbo</Link>
            <Link to="/">Full Time Kano</Link>
            <Link to="/"> Kebbi</Link>
          </div>
        </div>

            {/* 2 */}
        <div className='flex flex-col mt-8'>
          <h3 className='font-bold mb-6'>Trending Jobs</h3>
          <div className='flex flex-col gap-4 underline text-[#2557a7]'>
                    
            <Link to="/">C</Link>
            <Link to="/">Data Analyst Remote Lagos</Link>
            <Link to="/">Architect Lagos</Link>
            <Link to="/">Data Analyst Abuja</Link>
            <Link to="/">Social Media Lagos</Link>
            <Link to="/">E Commerce Website</Link>
            <Link to="/">Software Engineer Lagos</Link>
            <Link to="/">M Kopa</Link>
            <Link to="/">No Experience, Remote Jobs Lagos</Link>
            <Link to="/">Graphic Design Lagos</Link>
            <Link to="/">Graphics Designer Lagos</Link>
            <Link to="/">Assistant Abuja</Link>
            <Link to="/">Business Analyst Lagos</Link>
            <Link to="/">Social Media Manager Lagos</Link>
            <Link to="/">Ongoing Recruitment Abuja</Link>
            <Link to="/">Ui Ux Designer Lagos</Link>
            <Link to="/">Brand Marketing Communication, Digital Media Lagos</Link>
            <Link to="/">Part Time, Remote Lagos</Link>
            <Link to="/">Digital Marketing Remote Lagos</Link>
            <Link to="/">Customer Service Abuja</Link>
            <Link to="/">Work From Home Online Lagos</Link>
            <Link to="/">Fintech Company Lagos</Link>
            <Link to="/">Plumbing Jobs</Link>
            <Link to="/">Front End</Link>
            <Link to="/">Visa Sponsorship In USA</Link>
            <Link to="/">Customer Support Lagos</Link>
            <Link to="/">Power App</Link>
            <Link to="/">Customer Service Lagos</Link>
            <Link to="/">React Develope</Link>
          </div>
        </div>

            {/* 3 */}
        <div className='flex flex-col '>
          <h3 className='font-bold mb-6'>Popular Cities</h3>
          <div className='flex flex-col gap-4  underline text-[#2557a7]'>
            <Link to="/">Abia</Link>
            <Link to="/">Asaba</Link>
            <Link to="/">Warri</Link>
            <Link to="/">Abuja</Link>
            <Link to="/">Lagos</Link>
            <Link to="/">Anambra</Link>
            <Link to="/">Akwa Ibom</Link>
            <Link to="/">Yaba</Link>
            <Link to="/">Lekki</Link>
            <Link to="/">Kano</Link>
            <Link to="/">Akure</Link>
            <Link to="/">Kwara</Link>
            <Link to="/">Calabar</Link>
            <Link to="/">Owerri</Link>
            <Link to="/">Rivers</Link>
            <Link to="/">Ikeja</Link>
            <Link to="/">Benin City</Link>
            <Link to="/">Ibadan</Link>
            <Link to="/">Ogun</Link>
            <Link to="/">Delta</Link>
            <Link to="/">Abeokuta</Link>
            <Link to="/">Port Harcourt</Link>
            <Link to="/">Osun</Link>
            <Link to="/">Enugu</Link>
            <Link to="/">Kaduna</Link>
            <Link to="/">Ilorin</Link>
            <Link to="/">Onitsha</Link>
            <Link to="/">Osogbo</Link>
          </div>
        </div>

              {/* 4 */}
        <div className='flex flex-col mt-[-16rem]'>
          <h3 className='font-bold mb-6'>Popular Companies</h3>
          <div className='flex flex-col gap-4  underline text-[#2557a7]'>
            <Link to="/" >Safety Security Supervisor</Link>
            <Link to="/" >Work From Home $ Strategy Manager</Link>
            <Link to="/">Administrative Assistant</Link>
            <Link to="/">Commercial Manager</Link>
            <Link to="/">Nigeria Lagos</Link>
            <Link to="/">US Agency For International Development Usaid</Link>
            <Link to="/">Product Designer</Link>
            <Link to="/">Remote</Link>
            <Link to="/"> Data Scientist, Remote</Link>
            <Link to="/">Oil Gas, Energy Intern</Link>
            <Link to="/">Plastic Lagos</Link>
            <Link to="/">
            <Link to="/">Content Writing, Cryptocurrency, Remote</Link>
            <Link to="/">Humanitarians</Link></Link>
            <Link to="/">Work From Home Online</Link>
            <Link to="/">Jobs</Link>
            <Link to="/">Data Analysis</Link>
            <Link to="/">Dangote Group</Link>
            <Link to="/"> Crossover Work From Home, Remote</Link>
            <Link to="/">Plant Manager</Link>
            <Link to="/">Graduate</Link>
            <Link to="/">Online</Link>
          </div>
        </div>
        </div>
      </div>: null}

      
     
    </div>    
  )
}

export default Hero;

























