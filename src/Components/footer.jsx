
import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <>
    <div className='bg-green-800 flex flex-col md:flex-row gap-10 py-10 px-6 mt-4 justify-between items-center'>
        <div className='my-15'>
            <span className=' text-neutral-300 font-bold text-xl my-3'>JEWEL AGRO</span>
            <p className='text-neutral-50 p-1 my-3 '>We are committed to providing the best quality agricultural products<br/> and services to our customers.</p>
            <div className='flex justify-start md:justify-start mt-4 gap-4 text-amber-300'>
                <Facebook/>
                <Instagram/>
                <Twitter/>

            </div>

        </div>
        <div className='flex flex-col md:flex-row gap-10 md:items-left my-15'>
            <div>
                <h1 className='text-neutral-50 font-bold text-2xl'>Site Map</h1>
                <ul className='list-none text-neutral-50'>
                    <li className='py-1'>Home</li>
                    <li className='py-1'>About Us</li>
                    <li className='py-1'>Products</li>
                    <li className='py-1'>Contact Us</li>
                    
                </ul>    
            </div>
            <div>
                <h1 className='text-neutral-50 font-bold text-2xl p-1' >Legal</h1>
                <p className='text-neutral-50 p-1 '>privacy policy</p>
                <p className='text-neutral-50 p-1 '>Terms of service</p>
            </div>
        </div>
      
    </div>
    <div className='bg-amber-600'>
        <p className='text-neutral-900 py-3 text-center '>copyright @ 2025 JEWEL AGRO, All rights reserved</p>
    </div>
    </>
  )
}

export default Footer
