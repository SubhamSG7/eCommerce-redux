import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { currencyChange } from '../slices/currencySlice';
import { fetchCurrency } from '../actions/actions';
import HashLoader from "react-spinners/HashLoader";




const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

const {cartData} = useSelector((state)=>state.cart)


  const navItems = [
    { id: 1, text: 'SignUp', nav: "/signUp" },
    { id: 2, text: `Cart (${cartData.length})`, nav: "/cart" },
    { id: 3, text: 'Blog', nav: "/blog" },
    { id: 4, text: 'Contact', nav: "/contact" },
    { id: 5, text: 'Products', nav: "/products" },
  ];

  const handleItemClick = (navPath) => {
    navigate(navPath);
    setNav(false);
  };

const dispatch = useDispatch();


const {currencyData,error,loading} = useSelector((state)=>state.currency);

const currentCurrency = useSelector((state)=>state.currency.currentCurrencyName)


useEffect(()=>{
  dispatch(fetchCurrency())
  
},[dispatch])



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

    <div className='bg-cyan-500 flex justify-center items-center h-18 gap-2 max-w-full mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-white'><Link to="/">Ecommerce</Link></h1>

      <ul className='hidden md:flex justify-between  items-center gap-2 '>
        {navItems.map(item => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item.nav)}
            className='p-5 hover:bg-white rounded-xl  cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Ecommerce</h1>

        {navItems.map(item => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item.nav)}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
       
      </ul>
      <select
          name="currency"
          className="bg-cyan-500 border border-white text-white px-4 rounded cursor-pointer"
          onChange={currencyHandler}
          value={currentCurrency}
     
        >
            {availableCurrency.map((item,index)=> <option key={index} value={item}>{item}</option>)}
        </select>
    </div>

  );
};

export default Navbar;
