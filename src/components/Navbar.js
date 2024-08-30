import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import Contact from '../assets/contact.png';
import Menu from '../assets/menu.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg h-20 sticky top-0 z-20 flex items-center justify-between  px-4 md:px-8 lg:px-12 font-burbank text-2xl">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className=" mt-4 w-32 h-32" />
      </div>

      {/* NavLinks for larger screens */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="home" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-red-600 active:text-red-700">
          Home
        </Link>
        <Link to="categories" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer  hover:text-red-600 active:text-red-700">
          Categories
        </Link>
        <Link to="products" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer  hover:text-red-600 active:text-red-700">
          Exclusives
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer  hover:text-red-600 active:text-red-700">
          About Us
        </Link>
        <Link to="reviews" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer  hover:text-red-600 active:text-red-700">
          Reviews
        </Link>
      </div>

      {/* Signup Button */}
      <button className="hidden md:flex items-center gap-2 text-lg font-serif hover:text-orange-700">
        <img src={Contact} className="w-8 h-8" alt="Contact Icon" />
        SIGN-IN
      </button>

      {/* Hamburger Menu Icon for mobile */}
      <div className="md:hidden">
        <img
          src={Menu}
          alt="menu"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link to="home" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer  hover:text-red-600 active:text-red-700" onClick={() => setShowMenu(false)}>
            Home
          </Link>
          <Link to="categories" spy={true} smooth={true} offset={-100} duration={500} className="cursor-pointer hover:text-red-600 active:text-red-700" onClick={() => setShowMenu(false)}>
            Categories
          </Link>
          <Link to="products" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-red-600 active:text-red-700" onClick={() => setShowMenu(false)}>
            Exclusives
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-red-600 active:text-red-700" onClick={() => setShowMenu(false)}>
            About Us
          </Link>
          <Link to="reviews" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer hover:text-red-600 active:text-red-700" onClick={() => setShowMenu(false)}>
            Reviews
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
