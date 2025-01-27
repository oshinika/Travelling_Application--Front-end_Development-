import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const [active, setActive] = useState('Navbar');

  const showNav = () => {
    setActive('Navbar activeNavbar');
  };

  const hideNav = () => {
    setActive('Navbar');
  };

  return (
    <section className='Navbar-section'>
      <header className='header grid'>
        <div className='logo-div'>
          <a href="#" className='logo flex'>
            <h1><MdOutlineTravelExplore className='icon' />Travel.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='NavLists grid'>
            <li className='NavItem'>
              <a href='#' className='NavLink'>Home</a>
            </li>
            <li className='NavItem'>
              <a href='#' className='NavLink'>Packages</a>
            </li>
            <li className='NavItem'>
              <a href='#' className='NavLink'>Shop</a>
            </li>
            <li className='NavItem'>
              <a href='#' className='NavLink'>About</a>
            </li>
            <li className='NavItem'>
              <a href='#' className='NavLink'>Pages</a>
            </li>
            <li className='NavItem'>
              <a href='#' className='NavLink'>News</a>
            </li>
            <li className='NavItem'>
              <a href='#' className='NavLink'>Contact</a>
            </li>
            <button className='btn'>
              <a href='#'>BOOK NOW</a>
            </button>
          </ul>

          <div className='closeNavbar' onClick={hideNav}>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div className='toggleNavbar' onClick={showNav}>
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  );
};

export default Navbar;