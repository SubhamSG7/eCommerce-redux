import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartslice';
import ProductUpdateButtons from './ProductUpdateButtons';
import ButtonPlusMinus from "./ButtonPlusMinus"
import { Link } from 'react-router-dom';

const Card = ({ item }) => {

  const dispatch = useDispatch()
  const {cartData} = useSelector((state)=>state.cart)

  const data = cartData.find((elem) => elem.id == item.id);


  

  const { currentCurrencyName, currentCurrencyPrice } = useSelector((state) => state.currency);

  return (
    <div className="w-96 ml-2 flex flex-col items-center bg-white shadow-md rounded-xl transition-transform duration-500 hover:scale-105 hover:shadow-xl">
      <Link to={`/products/${item.id}`} className="w-full">
        <img 
          src={item.image}
          alt="Product" 
          className="h-96 w-96 rounded-t-xl" 
        />   </Link>
        <div className="px-4 py-3 w-full">
          <span className="text-gray-700 mr-3 uppercase text-xs">{item.title}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">{item.category}</p>
          <p className="text-lg font-semibold text-black">
          {item.quantity
          ? (item.price * item.quantity * currentCurrencyPrice).toFixed(2)
          : (item.price * currentCurrencyPrice).toFixed(2)}{" "}
            <span className="px-2 text-red-400">({currentCurrencyName})</span>
          </p>
          {item.quantity ? (
        <ButtonPlusMinus item={item} />
      ) : data ? (
        <button className="px-6 py-2 text-white bg-red-900 rounded" disabled>
          Added into Cart
        </button>
      ) : (
        <button
          className="px-6 py-2 text-white bg-slate-700 rounded hover:bg-slate-900"
          onClick={() => dispatch(addToCart(item))}
        >
          Add To Cart
        </button>
      )}
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3"></p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2"></p>
            </del>
          </div>
        </div>
   
    </div>
  );
}

export default Card;
