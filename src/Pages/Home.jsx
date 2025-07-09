import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Products from '../Components/Products'
import Cart from '../Components/Cart'
import Checkout from '../Components/checkout'
import Contact from '../Components/contact'
import Footer from '../Components/footer'


const Home = () => {
  return (
<>
<Hero/>
<Products/>
<About/>
<Cart/>
<Checkout/>
<Contact/>
<Footer/>
</>
  )
}

export default Home
