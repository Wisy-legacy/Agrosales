import React from 'react'
import {Trees, Bike, HandHelping, CircleDollarSign} from "lucide-react"

const details=[
  {
    title:"Organic and fresh",
    description: "we make sure all products are grown naturally and delivered fresh",
    icon: <Trees size={40}/>,
  },
  {
    title:"Farmer Empowerment",
    description: "We work directly with local farmers, giving them better income opportunities.",
    icon: <HandHelping size={40}/>
  },
  {
    title:"Fast Delivery",
    description: "You get your orders delivered fresh to your door within 24 hours",
    icon: <Bike size={40}/>
  },
  {
    title: "Affordable Prices",
    description: "we offer high quality products at Prices that is Fair and accesible to everybody",
    icon: <CircleDollarSign size={40}/>
  }
];

const About = () => {
  return (
    <>
      <div className='my-4'>
        <div>
          <h1 className=' p-3 mb-7 text-3xl text-center font-bold Playfair text-green-500'>Why choose us</h1>
        </div>
      <div className='grid sm:grid md:grid-cols-2 lg:grid-cols-4 justify-center item-center gap-7  mx-7'>
        {details.map((item)=>{
           return(
              <div className='bg-green-400 w-full h-65 rounded-3xl text-white-300 mb-5 hover:shadow-xl cursor-pointer hover:translate-y-[-20px] transition-shadow ease-in-out transition-transform transition-[2s]'>
               <div className=' my-4  mx-7'> {item.icon}</div>
                <h3 className='text-3xl pt-3 Playfair mt-4 mx-7 font-bold'>{item.title}</h3>
                <p className='mx-7 pt-3 text-1xl Playfair'>{item.description}</p>
              </div>
             )
    })}  
     </div>
      
      </div>
    </>

  )
}

export default About
