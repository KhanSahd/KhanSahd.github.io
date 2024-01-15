import React from 'react';
import img1 from '../assets/selfie1.jpeg';
import cv from '../assets/Sahd_Khan_Official_Resume.pdf';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <div id="about" className="w-full flex-col flex lg:items-center lg:flex-row justify-center  ">
      {/* Col1 container */}
      <div className="flex flex-col h-2/3 lg:w-1/2 items-center">
        {/* Col1 Images */}
        <img
          src={img1}
          alt="Sahd Khan"
          className="max-lg:size-80 lg:size-96 rounded-lg relative mt-10 lg:mt-0"
        />
      </div>
      {/* Col2; text */}
      <motion.div
        className="lg:w-1/2 p-10 max-sm:p-5 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <p className="lg:text-4xl md:text-2xl text-xl font-bold mb-5 font-main tracking-wider text-black ">
          Hey there! I'm Sahd
        </p>
        <p className="text-xs md:text-sm lg:text-base  mb-5 font-main tracking-wide text-gray-500 text-justify xl:w-full">
          I am a new grad from California State University Sacramento with a B.S. in Computer
          Science. I have a passion for building software and learning new technologies. I am
          currently looking for a full-time position as a software engineer/Web Developer but am
          open to working wherever I feel wanted and respected. I am a very hard worker and am
          always looking to improve my skills. I take great pride in my problem-solving mentality
          and my ability to work well with others. I feel my strongest characteristic is my ability
          to learn quickly and adapt to new situations.
        </p>
        <p className="text-xs md:text-sm lg:text-base  mb-5 font-main tracking-wide text-gray-500 text-justify xl:w-full">
          I've learned a lot in my time at CSUS and have had the opportunity to work on some really
          great projects. Many of these projects involved working in a team environment and
          collaborating with others to achieve a common goal which is something I really enjoy. I've
          also had the opportunity to work on some projects on my own which has helped me develop my
          problem-solving skills and my ability to work independently. I've also had the opportunity
          to work on some projects that have been deployed to the web and mobile devices. I've
          learned a lot about the software development lifecycle and have gained a lot of experience
          working with different technologies.
        </p>
        {/* Button to download CV */}
        <a href={cv} download="Sahd_Khan_Resume" target="_blank" rel="noreferrer">
          <motion.button
            className="bg-[#112A46] text-white font-bold py-2 px-4 rounded-full"
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1, backgroundColor: '#245893' }}>
            Download CV
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
}
