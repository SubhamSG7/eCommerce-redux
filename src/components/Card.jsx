import React from 'react';
import { useSelector } from 'react-redux';

const Card = ({ item }) => {
  const { currentCurrencyName, currentCurrencyPrice } = useSelector((state) => state.currency);

  return (
    <div className="w-96 ml-2 flex flex-col items-center bg-white shadow-md rounded-xl transition-transform duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#" className="w-full">
        <img 
          src={item.image}
          alt="Product" 
          className="h-96 w-96 rounded-t-xl" 
        />
        <div className="px-4 py-3 w-full">
          <span className="text-gray-700 mr-3 uppercase text-xs">{item.title}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">{item.category}</p>
          <p className="text-lg font-semibold text-black">
            {(item.price * currentCurrencyPrice).toFixed(2)} 
            <span className="px-2 text-red-400">({currentCurrencyName})</span>
          </p>
          <button
          type="button"
          className={`mt-4 py-2 bg-cyan-400 focus:ring-indigo-500 text-white w-full transition duration-200 rounded-lg`}
         
        >
            Add to Cart
        </button>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3"></p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2"></p>
            </del>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
