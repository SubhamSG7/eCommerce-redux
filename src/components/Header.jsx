import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { currencyChange } from '../slices/currencySlice';
import { fetchCurrency } from '../actions/actions';
import HashLoader from "react-spinners/HashLoader";
import {updateCart} from "../slices/cartslice"
import Cookies from "js-cookie";
import { getLoggedUser, setLoggedUser } from '../slices/userSlice';

const Navbar = () => {
  const dispatch=useDispatch()
  const cookieData=Cookies.get("token");
  const loggedUser=useSelector(getLoggedUser);

  if(cookieData){
    const user=JSON.parse(cookieData);
    dispatch(setLoggedUser(user.name))
  }
  else {
    dispatch(setLoggedUser(null))
  }

  
  const navigate = useNavigate();



const {cartData} = useSelector((state)=>state.cart)


  const navItems = [
    
    { id: 1, text: 'Products', nav: "/products" },
    { id: 2, text: `Cart (${cartData ? cartData.length : 0})`, nav: "/cart" },
    { id: 3, text: 'Blog', nav: "/blog" },
    { id: 4, text: 'Contact', nav: "/contact" },
    { id: 5, text: loggedUser?"Profile":'Login', nav: loggedUser?"/profile":"/login" },
 
  ];





const {currencyData,error,loading} = useSelector((state)=>state.currency);

const currentCurrency = useSelector((state)=>state.currency.currentCurrencyName)


useEffect(()=>{
  dispatch(fetchCurrency())
  
},[dispatch])


useEffect(()=>{
    if(cartData?.length > 0){
      localStorage.setItem("cart",JSON.stringify(cartData))
    }
},[cartData])


useEffect(()=>{
 
 const localData =  JSON.parse(localStorage.getItem("cart"))
if(localData !== null){

  dispatch(updateCart(localData))
}


},[])


if (loading) return <div className='h-[100vh] flex justify-center items-center'> <HashLoader
color="green"
loading={loading}
size={150}
aria-label="Loading Spinner"
data-testid="loader"
/></div>;
if (error) return <div>Error: {error}</div>;


const availableCurrency =  currencyData.conversion_rates ? Object.keys(currencyData.conversion_rates): [] 


function currencyHandler(e) {
dispatch(currencyChange(e.target.value));
}


  return (

    <div className=' bg-gradient-to-t from-slate-500 to-slate-800 flex justify-between items-center h-20 max-w-full mx-auto px-4 text-white'>
    <h1 className='text-3xl font-bold'>
      <Link to="/">Ecommerce</Link>
    </h1>
  
    <div className='flex items-center space-x-4 ml-auto'> 
      <ul className='flex items-center space-x-4'> 
        {navItems.map(item => (
          <Link to={item.nav} key={item.id}> 
            <li
              className='p-2 hover:bg-white rounded-xl cursor-pointer duration-300 hover:text-black'
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
  
     
  
      <select
        name="currency"
        className="bg-transparent border border-white text-white px-4 rounded cursor-pointer" 
        onChange={currencyHandler}
        value={currentCurrency}
      >
        {availableCurrency.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </div>
  </div>
  
  

  );
};

export default Navbar;
