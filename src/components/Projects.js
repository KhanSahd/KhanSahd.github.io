import React, { useEffect, useState } from 'react';
import client from '../client';
import Singleproject from './Singleproject';

export default function Projects() {
  const [fix, setFix] = useState(false);
  const [projects, setProjects] = useState([]);

  const setFixedSidebar = () => {
    const threshold = window.innerWidth >= 1920 ? 1500 : 1400;
    // : // : window.innerWidth >= 900
    // ? 1000
    // window.innerWidth >= 768
    // ? 1200
    // : window.innerWidth >= 640
    // ? 600
    // : 400;
    if (window.scrollY >= threshold) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "projects"]{
      title,
      description,
      technologies[]->{
        title
      },
        images[]
    }
    `
      )
      .then((res) => {
        setProjects(res);
      });
    projects.map((project) => console.log(project));
  });

  window.addEventListener('scroll', setFixedSidebar);

  return (
    <div id="projects" className="md:flex flex-row mt-10 ">
      {/* Left Container */}
      {/* <div className={`md:w-2/4 h-1/2 relative `}>
        <div
          className={`md:h-full w-full p-10 flex max-md:justify-evenly max-sm:items-center md:flex-col ${
            fix ? 'fixed md:-bottom-24 md:left-0 top-28 max-md:bg-white z-50' : ''
          }`}>
          <a href="#" target="_blank">
            <h1 className="font-bold font-main md:mb-5 max-md:text-center">Mobile Apps</h1>
          </a>
          <a href="#" target="_blank">
            <h1 className="font-bold font-main md:mb-5 max-md:text-center">
              Web Development Projects
            </h1>
          </a>
          <a href="#" target="_blank">
            <h1 className="font-bold font-main md:mb-5 max-md:text-center">Projects in Java</h1>
          </a>
        </div>
      </div> */}

      {/* Right Container with Scroll */}
      <div className="w-full flex-col items-center pb-5">
        <h1 className="font-main text-left max-md:mt-10 font-thin ml-2">
          All code is available upon request
        </h1>
        {projects.map((project) => (
          <Singleproject
            key={project._id}
            name={project.title}
            description={project.description}
            technologies={project.technologies}
            images={project.images}
          />
        ))}
      </div>
    </div>
  );
}
