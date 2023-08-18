import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NAV_CATEGORY } from '../utils/constants.js';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { HOME, ABOUT, CONTACT } = NAV_CATEGORY;
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
        <a href='/'>CSVJSON.</a>
      </h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <a href='/'>{HOME}</a>
        </li>
        <li className='p-4'>
          <a href='/#about-section'>{ABOUT}</a>
        </li>
        <li className='p-4'>{CONTACT}</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>CSVJSON.</h1>
        <li className='p-4 border-b border-gray-600'>
          <a href='/'>{HOME}</a>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <a href='/#about-section'>{ABOUT}</a>
        </li>
        <li className='p-4'>
          {CONTACT}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;