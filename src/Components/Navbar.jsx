import {useState, React} from 'react'
import { Search, MenuIcon} from 'lucide-react'
import Button from './Button'
import {X} from "lucide-react";
import { useNavigate, Link } from 'react-router-dom';



const key = import.meta.env.VITE_API_KEY

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');


  const handleSearch = () => {
    if (onSearch && searchInput.trim()) {
      onSearch(searchInput.trim());
      setSearchInput('');
    }
  };

  const handleOrderNowClick = () => {
    navigate('/checkout');
  };

const toggleNavbar = () => {

document.getElementById("header2").style.display = "flex"
document.getElementById("closeBtn").style.display = "block"
document.getElementById("toggleNav").style.display = "none"

}
 function toggleNavbarClose () {
  document.getElementById("header2").style.display = "none"
  document.getElementById("toggleNav").style.display = "flex"
  document.getElementById("closeBtn").style.display = "none"
 }
  return (
    <>
    <div className=' flex justify-between item-center m-6 Playfair -sticky top-0 z-50'>
        <div>
            <span className='text-[green] font-bold text-xl mt-3'>JEWEL AGRO</span>
        </div>
        <div>
          <ul className='list-none md:flex hidden justify-between Playfair gap-3 mt-3 text-[green]'>
          <li> <Link to="/" className="hover:underline hover:text-green-700 transition">
              Home</Link></li>
          <li> <Link to="/About" className="hover:underline hover:text-green-700 transition">
              About</Link></li>
            <li> <Link to="/Products" className="hover:underline hover:text-green-700 transition">
              Products</Link></li>
              <li> <Link to="/Cart" className="hover:underline hover:text-green-700 transition">
              Cart</Link></li>
              <li> <Link to="/checkout" className="hover:underline hover:text-green-700 transition">
              Checkout</Link></li>
              <li> <Link to="/contact" className="hover:underline hover:text-green-700 transition">
              Contact</Link></li>
            </ul>
        </div>
        <div className='md:flex hidden gap-5'>
            <div className='flex items-center bg-green-200 rounded-2xl px-3'>
            <input type="text" placeholder='Search product' className='outline-none bg-green-200 rounded-2xl px-3'  value={searchInput}
             onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && onSearch.current) {
                  setSearchInput('');
                }
              }} />
            <Search onClick={handleSearch}/>
            </div>
            <div>
            <Button  onClick={handleOrderNowClick} message={"Order Now"} bgColor={"bg-[green]"}/>
            </div>
        </div>
        <button onClick={toggleNavbar} id="toggleNav" className='block md:hidden'><MenuIcon/></button>

       <button id='closeBtn' className='flex-end hidden justify-end item-end ' onClick={toggleNavbarClose}><X/></button>

      
    </div>
    <div id='header2' className=" absolute left-50 border bg-cyan-200 gap-3 rounded-3xl hidden w-[40%] px-5 py-7 z-10 justify-end flex-end flex-col xl:hidden lg:hidden md:hidden sm:flex">
          <ul className="list-none py-3 gap-6 Playfair  mt-3 text-[green]">
          <li className='py-2'>About</li>
            <li className='py-2'>Products</li>
            <li className='py-2'>Cart</li>
            <li className='py-2'>Contact</li>
          </ul>
          <div className='flex items-center bg-green-200 rounded-2xl px-2 py-2'>
            <input type="text"  placeholder='Search' className='outline-none bg-green-200 rounded-1xl  w-20'/>
    
            </div>
            <div>
            <Button  onClick={handleOrderNowClick} message={"Order Now"} bgColor={"bg-[green]"}/>
            </div>
          
    </div>
    </>
  
  )
}

export default Navbar
