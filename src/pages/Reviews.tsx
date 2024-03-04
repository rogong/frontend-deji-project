import React from 'react';
import {Link} from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';


const Reviewspage = () => {
  return (
    <div >
       <Navbar2 />
      <div  >
        <div className='flex items-center justify-center'>
          <div>
            <div className='pl-4'>
              <h1 className='text-3xl font-bold mt-4 md:mt-[3rem]  '>My reviews and contributions</h1>
              <p className='text-sm text-gray-500 w-5/6 md:w mt-4'>Your reviews, questions, and answers will
                appear on the employer’s Company Page. They
                are not associated with your name, resume,
                or job applications.
              </p>
            </div>
            <div className='border-8 md:hidden mt-6'></div>
            <div className='flex gap-6 md:mt-10'>
              <Link to='' className='hover:font-bold hover:text-[#2557a7] hover:bg-blue-100'>
                <p className='hover:underline underline-offset-[1.3rem] p-6'>Reviews<span>(0)</span></p>
              </Link>
              <Link to='' className='hover:font-bold hover:text-[#2557a7] hover:bg-blue-100'>
                <p className='hover:underline underline-offset-[1.3rem] p-6'>Question<span>(0)</span></p>
              </Link>
              <Link to='' className='hover:font-bold hover:text-[#2557a7] hover:bg-blue-100'>
                <p className='hover:underline underline-offset-[1.3rem] p-6'>Answers<span>(0)</span></p>
              </Link>
            </div>
            <hr className=' h-[3px] w-full mx-auto  border-0 rounded dark:bg-gray-700 bg-gray-100' />
          </div>
        </div>


        {/* main page */}
        <div className='flex items-center justify-center'>
          <div>
            <img src='/Avarta 5.PNG'
            className='pb-8'
            width={280}
            height={280}
             alt=''>
             </img>
            <div className='flex items-center justify-center'>
              <div >
                <h2 className='text-2xl font-bold pb-3 '>Unlock all reviews</h2>
                <p className='text-sm text-gray-500 pb-4'>Access all reviews by writing yours</p>
                <Link to=''><button className='bg-[#2557a7] py-2 px-8  text-white rounded-lg font-bold'>Write a review</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Reviewspage;