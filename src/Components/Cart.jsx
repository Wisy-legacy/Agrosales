import React from 'react'
import { useState, useEffect } from 'react'
import image1 from "../assets/rice.jpeg"
import image2 from "../assets/beans.jpeg"
import image3 from "../assets/yam.jpeg"
import image4 from "../assets/crop.jpeg"
import image5 from "../assets/tomatoes.jpeg"
import image6 from "../assets/palmoil.jpeg"
import image7 from "../assets/groundnutoil.jpeg"
import image8 from "../assets/garri.jpeg"
import image9 from "../assets/fertilizer.jpeg"
import Button from './Button'
const Product=[
    {
        id: 1,
        name: "Rice",
        price: 60000,
        quantity: 2,
        image: image1
    },
    {
        id: 2,
        name: "Beans",
        price: 4000,
        quantity: 1,
        image: image2
    },
    {
        id: 3,
        name: "Yam",
        price: 2500,
        quantity: 3,
        image: image3
    },
    {
        id: 4,
        name: "Maize",
        price: 3000,
        quantity: 1,
        image: image4
    },
    {
        id: 5,
        name: "Tomatoes",
        price: 1500,
        quantity: 2,
        image: image5
    },
    {
        id: 6,
        name: "Palm Oil",
        price: 8000,
        quantity: 1,
        image: image6
    },
    {
        id: 7,
        name: "Groundnut Oil",
        price: 10000,
        quantity: 1,
        image: image7
    },
    {
        id: 8,
        name: "Garri",
        price: 3000,
        quantity: 2,
        image: image8
    }
    ,
    {
        id: 9,
        name: "Fertilizer",
        price: 5000,
        quantity: 1,
        image: image9
    }



];
const Cart =() => {
    const [cart, setCart]= useState([]);
    useEffect(() =>{
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (Product) => {
        const existing = cart.find((item) => item.id === Product.id);
        if (existing) {
          setCart(
            cart.map((item) =>
              item.id === Product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          );
        } else {
          setCart([...cart, { ...Product, quantity: 1 }]);
        }
      };
    
      const handleRemove = (id) => {
        setCart(cart.filter((item) => item.id !== id));
      };
    
      const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };


      return (
        <div className='bg-green-100  -mt-5 px-4 md:px-16 py-10'>
            <h3 className='text-center text-3xl Playfair py-8 mt-2 text-green-800'> Your Cart</h3>
            <div className=' grid lg:grid-cols-2 gap-6 justify-center'>
                {Product.map((item) => (
                    <div key={item.id} className=' rounded-2xl grid md:flex lg:flex xl:flex px-5 py-5 justify-between  items-center bg-green-300   '>
                        <img src={item.image} alt={item.name} className='w-24 h-24 object-cover rounded-md justify-self-center' />
                        <h4 className='text-lg font-semibold text-center'>{item.name}</h4>
                        <p className='text-red-800 font-medium text-center '>{item.price}</p>
                        <Button  message={"Add to Cart"} bgColor={"bg-[green]"} onClick={() => handleAddToCart(item)} />
                    
                    
                    </div>
                ))}
            </div> 
            <div className='bg-white mt-10 p-5 rounded-xl shadow'>
        <h4 className='text-2xl font-bold mb-4 text-green-800'>Items in Cart:</h4>
        {cart.length === 0 ? (
          <p className='text-gray-500'>Cart is empty</p>
        ) : (
          <div className='space-y-4'>
            {cart.map((item) => (
              <div key={item.id} className='flex justify-between items-center border-b pb-2'>
                <div>
                  <p className='font-semibold'>{item.name}</p>
                  <p>₦{item.price.toLocaleString()} x {item.quantity}</p>
                </div>
                <button
                  className='text-red-500 hover:underline text-sm'
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className='mt-4 text-xl font-semibold text-right'>
              Total: ₦{getTotal().toLocaleString()}
            </div>
          </div>
        )}
      </div>
          
        </div>
      )

a
}


 


export default Cart
 