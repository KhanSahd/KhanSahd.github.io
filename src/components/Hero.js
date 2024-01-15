import React from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const professions = [
    'Software Engineer',
    'Mobile App Developer',
    'Web Developer',
    'Full Stack Developer',
    'Backend Developer',
  ];

  return (
    <div
      id="top"
      className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-sky-100 via-blue-100 via-50% to-[#ffff] to-50%">
      <div className="flex-col w-1/2 h-1/2">
        <h1 className="text-xl font-bold text-center uppercase mb-5 font-main tracking-wider text-[#A4CFFB] drop-shadow-sm">
          Hey! I am
        </h1>
        <h1 className="text-7xl font-bold text-center mb-5 font-main text-[#112A46] drop-shadow-sm">
          Sahd Khan
        </h1>
        <h1 className="text-4xl font-bold text-center mb-5 font-main tracking-wider text-[#112A46] drop-shadow-sm">
          I'm a{' '}
          <span className="text-[#A4CFFB] font-main drop-shadow-sm">
            {/* <ReactTyped strings={professions} typeSpeed={40} backSpeed={50} loop /> */}
            <TypeAnimation
              cursor={false}
              sequence={professions}
              wrapper="span"
              repeat={Infinity}
              speed={10}
              repeatType="loop"
            />
          </span>
        </h1>
      </div>
      <div className="bg-blue-100 w-16 h-16 absolute bottom-32 rotate-45"></div>
      <div className="absolute bottom-36">
        <FaArrowDownLong className=" text-[#A4CFFB] animate-bounce " />
      </div>
    </div>
  );
}
