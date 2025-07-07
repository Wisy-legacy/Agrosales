import React from 'react'
import {Phone, Mail, MapPinHouse} from 'lucide-react'



const contact = () => {
  return (
    <>
     <div className='flex flex-col md:flex-row gap-15 justify-center items-center  bg-green-50 py-10 px-4 w-full md:w-[28]'>
        <div className='bg-green-300 p-6  mt-3 md:my-25 w-full md:w-[28rem] rounded-3xl'>
            <h1 className='text-4xl font-bold mt-5 text-green-950'>Get in touch</h1>
            <p className=' text-green-700 text-1xl mt-5'>We would love to hear from you!<br/>feel free to reach out to us.</p>
            <div className='flex gap-2 mt-5  text-lg md:text-xl Playfair'><Phone/><span>+2348162103651</span></div>
           <div className='flex gap-2 text-lg md:text-xl mt-5'><Mail/> <span>wisdomchika190@gmail.com</span></div>
            <div className='flex gap-2 text-lg md:text-xl mt-5'><MapPinHouse/><span>No 84 factory road</span></div>
        </div>
        <div className='text-center bg-neutral-200 my-25 w-full md:w-[28rem] rounded-3xl p-6'>
            <h1 className='text-4xl font-medium mt-5 text-black-700'>Send</h1>
            <div className='flex flex-col mt-4'>
            <form action="" className='flex-col mt-4'>
                <input type="text" placeholder='Please your Name' className='border-2 rounded-2xl font-medium mt-2 p-2.5 w-60 md:w-80 bg-emerald-300'/>
                <input type="email" placeholder='Enter email' className='border-2 rounded-2xl font-medium mt-2 p-2.5 w-60 md:w-80 bg-emerald-300' />
                <textarea placeholder="Input your message" id="" cols="30" rows="5"  className='border-2 rounded-2xl font-medium mt-2 p-2.5 w-60 md:w-80 bg-emerald-300'></textarea>
            </form>
            </div>
            <button className='rounded-3xl px-3 text-amber-50 py-5 bg-green-900 mt-2 w-50 md:w-80'>Send Message</button>
        </div>
      
      </div>
    </>
  )
}

export default contact
