/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import logo3 from '../assets/logo3.png';
import Hamburger from 'hamburger-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [selectedPage, setSelectedPage] = useState('');
  const [showBackground, setShowBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 300;
      const shouldShowBackground = window.scrollY > threshold;

      if (shouldShowBackground !== showBackground) {
        setShowBackground(shouldShowBackground);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showBackground]);

  return (
    <div
      className={`w-full h-24 items-center z-50 flex justify-between ${
        showBackground ? 'fixed shadow-md' : 'absolute'
      } top-0 px-5 md:px-10 lg:px-14 transition-all ${showBackground ? 'bg-white' : ''}`}>
      {/* Logo */}
      <div className="flex-1">
        <Link to="top" spy={true} smooth={true}>
          <img src={logo3} alt="logo" className="w-32 h-32 cursor-pointer" />
        </Link>
      </div>
      {/* Links */}
      <div className="hidden md:flex flex-row w-1/2 justify-center md:gap-7 lg:gap-10 xl:gap-24 items-center">
        <div>
          <Link
            to="about"
            spy={true}
            smooth={true}
            className="font-main text-lg text-black cursor-pointer"
            onMouseEnter={() => setSelectedPage('About')}
            onMouseLeave={() => setSelectedPage('')}>
            About
          </Link>
          <div
            className={`${
              selectedPage === 'About'
                ? 'w-full bg-[#112A46] h-0.5 transition-all duration-300'
                : 'w-0 h-0.5 transition-all'
            }`}></div>
        </div>
        <div>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            className="font-main text-lg text-black cursor-pointer"
            onMouseEnter={() => setSelectedPage('Projects')}
            onMouseLeave={() => setSelectedPage('')}>
            Projects
          </Link>
          <div
            className={`${
              selectedPage === 'Projects'
                ? 'w-full bg-[#112A46] h-0.5 transition-all duration-300'
                : 'w-0 h-0.5'
            }`}></div>
        </div>
        <div>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            className="font-main text-lg text-black cursor-pointer"
            onMouseEnter={() => setSelectedPage('Contact')}
            onMouseLeave={() => setSelectedPage('')}>
            Contact
          </Link>
          <div
            className={`${
              selectedPage === 'Contact'
                ? 'w-full bg-[#112A46] h-0.5 transition-all duration-300'
                : 'w-0 h-0.5'
            }`}></div>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/sahdkhan/"
            target="_blank"
            className="font-main text-lg text-black"
            onMouseEnter={() => setSelectedPage('LinkedIn')}
            onMouseLeave={() => setSelectedPage('')}
            rel="noreferrer">
            LinkedIn
          </a>
          <div
            className={`${
              selectedPage === 'LinkedIn'
                ? 'w-full bg-[#112A46] h-0.5 transition-all duration-300'
                : 'w-0 h-0.5'
            }`}></div>
        </div>
      </div>
      <div className="md:hidden z-50">
        {/* {isOpen ? (
          <IoClose size={32} className="text-black" onClick={toggle} />
        ) : (
          <RxHamburgerMenu size={32} className="text-black" onClick={toggle} />
        )} */}
        <Hamburger toggled={isOpen} toggle={toggle} size={24} />
      </div>

      {/* Mobile Menu */}
      {isOpen ? (
        <motion.div
          initial={{ right: -1000 }}
          animate={{ right: isOpen ? 0 : -1000 }}
          className={` md:hidden flex-col w-1/4 shadow-xl shadow-black h-screen bg-white fixed top-0 items-center pt-20 justify-center`}>
          <div className="flex flex-col items-center gap-14">
            <a
              href="#"
              className="font-main text-sm sm:text-lg text-black"
              onMouseEnter={() => setSelectedPage('About')}
              onMouseLeave={() => setSelectedPage('')}>
              About
            </a>
            <a
              href="#"
              className="font-main text-sm sm:text-lg text-black"
              onMouseEnter={() => setSelectedPage('Projects')}
              onMouseLeave={() => setSelectedPage('')}>
              Projects
            </a>
            <a
              href="#"
              className="font-main text-sm sm:text-lg text-black"
              onMouseEnter={() => setSelectedPage('Contact')}
              onMouseLeave={() => setSelectedPage('')}>
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/sahdkhan/"
              target="_blank"
              className="font-main text-sm sm:text-lg text-black"
              onMouseEnter={() => setSelectedPage('LinkedIn')}
              onMouseLeave={() => setSelectedPage('')}
              rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
