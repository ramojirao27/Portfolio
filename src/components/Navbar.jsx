import React, { useState } from 'react';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex flex-col'>
    <div className={`shadow-md bg-white text-black dark:bg-gray-900 dark:text-white h-[80px] w-full flex items-center justify-between px-10`}>
      {/* Logo */}
      <p className='mx-5 text-4xl font-bold text-orange-500 tracking-wide cursor-pointer'>RR</p>

      {/* Desktop Menu */}
      <div className='hidden md:block'>
        <ul className='flex gap-10 text-lg font-medium'>
          <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'><a href="#home">Home</a></li>
          <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'><a href="#skills">Skills</a></li>
          <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'><a href='#projects'>Projects</a></li>
          <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Dark mode toggle and Hamburger menu */}
      <div className='flex gap-6 items-center'>
        {/* Theme Toggle */}
        <div onClick={() => toggleTheme(theme)} className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
          {theme === 'dark' ? <MdSunny size={30} /> : <FaMoon size={30} />}
        </div>
        
        {/* Hamburger Menu */}
        <div onClick={()=>handleMenuToggle()} className='md:hidden cursor-pointer'>
          {showMenu ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      
    </div>
    {showMenu && (
        <div className=' top-[80px] left-0 w-full bg-white dark:bg-gray-900 p-6 md:hidden'>
          <ul className='flex flex-col gap-6 text-xl font-medium'>
          <li onClick={()=>handleMenuToggle()} className='hover:text-orange-500 dark:text-white transition-colors duration-300 cursor-pointer'><a href="#home">Home</a></li>
          <li onClick={()=>handleMenuToggle()} className='hover:text-orange-500 dark:text-white transition-colors duration-300 cursor-pointer'><a href="#skills">Skills</a></li>
          <li onClick={()=>handleMenuToggle()} className='hover:text-orange-500 dark:text-white transition-colors duration-300 cursor-pointer'><a href='#projects'>Projects</a></li>
          <li onClick={()=>handleMenuToggle()} className='hover:text-orange-500 dark:text-white transition-colors duration-300 cursor-pointer'><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
// import React, { useState } from 'react';
// import { MdSunny } from "react-icons/md";
// import { FaMoon } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = ({ theme, toggleTheme }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleMenuToggle = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div className={`fixed top-0 left-0 w-full shadow-md bg-white text-black dark:bg-gray-900 dark:text-white h-[80px] flex items-center justify-between px-6 md:px-10 z-50`}>
//       {/* Logo */}
//       <p className='mx-5 text-4xl font-bold text-orange-500 tracking-wide cursor-pointer'>RR</p>

//       {/* Desktop Menu */}
//       <div className='hidden md:block'>
//         <ul className='flex gap-10 text-lg font-medium'>
//           <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'>Home</li>
//           <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'>Skills</li>
//           <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'>Projects</li>
//           <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'>Contact</li>
//         </ul>
//       </div>

//       {/* Dark mode toggle and Hamburger menu */}
//       <div className='flex gap-6 items-center'>
//         {/* Theme Toggle */}
//         <div onClick={() => toggleTheme(theme)} className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
//           {theme === 'dark' ? <MdSunny size={30} /> : <FaMoon size={30} />}
//         </div>
        
//         {/* Hamburger Menu */}
//         <div onClick={() => handleMenuToggle()} className='md:hidden cursor-pointer'>
//           {showMenu ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {showMenu && (
//         <div className='absolute top-[80px] left-0 w-full bg-white dark:bg-gray-900 p-6 md:hidden'>
//           <ul className='flex flex-col gap-6 text-xl font-medium'>
//             <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'>Home</li>
//             <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'>Skills</li>
//             <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'>Projects</li>
//             <li className='hover:text-orange-500 transition-colors duration-300 cursor-pointer'>Contact</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
