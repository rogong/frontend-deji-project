import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
    
  return (
    <div className='border-t-2 mt-[8rem] p-4'>
        <div className='flex flex-row gap-6 text-sm  text-gray/50 font-poppins  pb-[2rem] '>
        <Link className='hover:underline underline-offset-4' to="/Browsejob">Browse Jobs</Link>
        <Link className='hover:underline underline-offset-4' to="/Browsecompany">Browse Companies</Link>
        <Link className='hover:underline underline-offset-4' to="">Countries</Link>
        <Link className='hover:underline underline-offset-4' to="">About</Link>
        <Link className='hover:underline underline-offset-4' to="">Help Center</Link>
        <Link className='hover:underline underline-offset-4' to="">ESG at Indeed</Link>
        </div>

        <div className='flex flex-row gap-6 text-sm'>
        <span>© 2024 JobPersona</span>
        <Link className='hover:underline underline-offset-4' to="">Accessibility at JobPersona</Link>
        <Link className='hover:underline underline-offset-4' to="">Privacy Center</Link>
        <Link className='hover:underline underline-offset-4' to="">Cookies</Link>
        <Link className='hover:underline underline-offset-4' to="">Privacy</Link>
        <Link className='hover:underline underline-offset-4' to="">Terms</Link>
        </div>
    </div>
  )
}

export default Footer;