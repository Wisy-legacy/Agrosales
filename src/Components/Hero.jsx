import React from 'react'
import Button from './Button'
import image from "../assets/background.png"
import { Radius } from 'lucide-react'

const Hero = () => {
  return (
    <>
    <div className='md:flex flex-row    justify-center md:gap-40 gap-20 bg-green-200  px-7 py-8'> 
        <div >
            <p className='Playfair text-2xl m-3 ' >Welcome to a Culinary paradise</p>
            <h1 className='Playfair text-[25px] md:text-5xl p-3 my-3 font-bold  '>Indulge in Exquisite <br className='hidden md:block' />Food Products with Jewel Agro </h1>
            <p className='text-1xl p-3  my-3'>Discover a world of exceptional tastes curated just for you, from <br />from fresh produce to refined farm delicacies, our handpicked.</p>
            <Button message={"Shop now"} bgColor={"bg-[green]"} className=' justify-center item-center '/>
        </div>
       <div className='relative'>
       <div className=" item-center  md:w-[400px] w-[250px] h-[400px] bg-green-500 rounded-full mt-10">
        </div>  
        <div className="  absolute right-1/29 top-0 "> <img src={image} alt="" className='md:h-[450px] h-[400px] w-[600px]'></img></div>  
  
       </div>
    </div>
      
    </>
  ) 
}

export default Hero
