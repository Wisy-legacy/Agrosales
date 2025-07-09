import { useState } from 'react'
import { useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/contact'
import Checkout from './Components/checkout'
import Products from './Components/Products'
import Cart from './Components/Cart'
import './App.css'

const App = () => {
  const searchRef = useRef(null);

  const handleSearch = (query) => {
    // Send search keyword to Cart
    if (searchRef.current) {
      searchRef.current(query);
    }
  }
  



  

  return (
    <>
    <Navbar onSearch={handleSearch}  />
   

    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/products' element={<Products onSearchRef={searchRef}/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/About' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </>
  )
}

export default App
