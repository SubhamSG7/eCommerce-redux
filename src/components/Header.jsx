import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'SignUp', nav: "/SignUp" },
    { id: 2, text: 'Cart', nav: "/cart" },
    { id: 3, text: 'Blog', nav: "/Blog" },
    { id: 4, text: 'Contact', nav: "/ContactUs" },
    { id: 5, text: 'Products', nav: "/products" },
  ];

  const handleItemClick = (navPath) => {
    navigate(navPath);
    setNav(false);
  };

  return (
    <div className='bg-cyan-500 flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-white'>Ecommerce</h1>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item.nav)}
            className='p-4 hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
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
    </div>
  );
};

export default Navbar;
