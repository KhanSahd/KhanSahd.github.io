import React, { useEffect, useState } from 'react';
import client from '../client';
import Singleproject from './Singleproject';

export default function Projects() {
  const [projects, setProjects] = useState([]);

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

  return (
    <div id="projects" className="md:flex flex-row mt-10 ">
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
