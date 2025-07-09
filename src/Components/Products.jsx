import React, { useRef, useEffect } from 'react';
import image1 from "../assets/rice.jpeg";
import image2 from "../assets/beans.jpeg";
import image3 from "../assets/yam.jpeg";
import image4 from "../assets/crop.jpeg";
import image5 from "../assets/tomatoes.jpeg";
import image6 from "../assets/palmoil.jpeg";
import image7 from "../assets/groundnutoil.jpeg";
import image8 from "../assets/garri.jpeg";
import image9 from "../assets/fertilizer.jpeg";

const Goods = [
  { id: 1, name: "Rice", price: "#60,000/50kg", image: image1, description: "Freshly refined rice from local farms." },
  { id: 2, name: "Beans", price: "#4,000/bucket", image: image2, description: "Harvested beans for a healthy growth." },
  { id: 3, name: "Yam", price: "#2,500/tuber", image: image3, description: "Freshly Harvested Yam." },
  { id: 4, name: "Maize", price: "#3,000/bucket", image: image4, description: "Organic maize from local farms." },
  { id: 5, name: "Tomatoes", price: "#1,500/bucket", image: image5, description: "Freshly picked Tomatoes from local farms." },
  { id: 6, name: "Palm oil", price: "#8,000/5L", image: image6, description: "Freshly refined palmoil from local farms." },
  { id: 7, name: "Groundnut oil", price: "#10,000/5L", image: image7, description: "Freshly refined groundnut oil from local farms." },
  { id: 8, name: "Garri", price: "#3,000/paint", image: image8, description: "Freshly refined garri from local farms." },
  { id: 9, name: "Fertilizer", price: "#15,000/50kg", image: image9, description: "Buy your fertilizer." }
];

const Products = ({ onSearchRef }) => {
  const productRefs = useRef({});

  useEffect(() => {
    if (onSearchRef) {
      onSearchRef.current = (query) => {
        const match = Goods.find(
          (item) => item.name.toLowerCase() === query.toLowerCase()
        );
        if (match && productRefs.current[match.id]) {
          productRefs.current[match.id].scrollIntoView({ behavior: 'smooth' });
        }
      };
    }
  }, [onSearchRef]); 

  return (
    <div className='bg-lime-50 mb-0'>
      <div>
        <h1 className='text-center text-3xl font-bold mt-10 text-green-950 Playfair'>Our Products</h1>
        <p className='text-center text-2xl mt-4 font-bold Playfair'>Freshly harvested for healthy and nutritious living</p>
      </div>

      <div className='grid md:grid-cols-3 gap-2 mb-3'>
        {Goods.map((item) => (
          <div
            key={item.id}
            ref={(el) => (productRefs.current[item.id] = el)}
            className='bg-green-300 rounded-2xl flex flex-col w-70 m-5 gap-1 text-center items-center transition-transform duration-300 hover:scale-105'
          >
            <img src={item.image} alt={item.name} className='h-50 w-50 justify-center items-center mt-6 mx-6 rounded-2xl' />
            <h2 className='text-2xl font-bold text-green-900 Playfair items-center pt-3'>{item.name}</h2>
            <p className='text-1xl text-gray-700 Playfair pt-3'>{item.description}</p>
            <p className='text-lg font-bold text-red-900 hover:underline item-center Playfair pt-3 mb-5'>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
