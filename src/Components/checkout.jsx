import React, { useState, useEffect } from 'react';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCart(savedCart);
  }, []);

  const getTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in all required fields.');
      return;
    }

    // Submit logic here (e.g., send to backend or show success)
    alert('Order placed successfully!');
    localStorage.removeItem('cartItems');
    setCart([]);
  };

  return (
    <div className='p-6 bg-green-50 min-h-screen'>
      <h2 className='text-3xl text-green-700 font-bold mb-4'>Checkout</h2>

      {/* Cart Summary */}
      <div className='bg-white p-4 rounded-lg shadow mb-6'>
        <h3 className='text-xl font-semibold mb-3'>Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className='flex justify-between border-b py-2'>
            <span>{item.name} × {item.quantity}</span>
            <span>₦{(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
        <div className='flex justify-between mt-3 font-bold text-lg'>
          <span>Total:</span>
          <span>₦{getTotal().toLocaleString()}</span>
        </div>
      </div>

      {/* User Form */}
      <div className='bg-white p-4 rounded-lg shadow'>
        <h3 className='text-xl font-semibold mb-3'>Customer Details</h3>
        <input
          type='text'
          name='name'
          placeholder='Full Name'
          value={formData.name}
          onChange={handleInputChange}
          className='w-full border px-3 py-2 rounded mb-3'
        />
        <input
          type='tel'
          name='phone'
          placeholder='Phone Number'
          value={formData.phone}
          onChange={handleInputChange}
          className='w-full border px-3 py-2 rounded mb-3'
        />
        <textarea
          name='address'
          placeholder='Delivery Address'
          value={formData.address}
          onChange={handleInputChange}
          className='w-full border px-3 py-2 rounded mb-3'
        ></textarea>
        <textarea
          name='note'
          placeholder='Additional Notes (Optional)'
          value={formData.note}
          onChange={handleInputChange}
          className='w-full border px-3 py-2 rounded mb-3'
        ></textarea>

        <button
          onClick={handlePlaceOrder}
          className='bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800'
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
