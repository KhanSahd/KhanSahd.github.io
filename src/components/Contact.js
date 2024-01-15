import React from 'react';

export default function Contact() {
  // text-[#A4CFFB]
  return (
    <div className="flex-col items-center justify-center w-full p-20">
      <p className="font-bold text-6xl font-main text-center mb-10">Contact Me</p>
      <p className="font-thin text-md font-main text-center mb-7">
        Please feel free to reach out via E-mail or check out my Linkedin page!
      </p>
      <p className=" text-md font-main text-center mb-7">E-Mail: sahd.khan@outlook.com</p>
      <p className="text-center text-md font-main mb-7 text-[#A4CFFB]">
        <a href="https://www.linkedin.com/in/sahd-khan-4b6b8a1b0/">Linkedin</a>
      </p>
    </div>
  );
}
