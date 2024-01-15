import React from 'react';
import client from '../client';
import imageUrlBuilder from '@sanity/image-url';

export default function Singleproject({ name, description, technologies, images }) {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className="w-full p-2 flex-col justify-center mt-5 border-b">
      <p className="font-bold text-lg font-main">{name}</p>
      <p className="font-thin mb-5 font-main">{description}</p>
      {/* <p>{technologies}</p> */}
      <div className="flex flex-row mb-5 flex-wrap">
        {technologies &&
          technologies.map((tech) => (
            <p className="text-sm mr-2 bg-gray-200 px-2 rounded-lg font-main">{tech.title}</p>
          ))}
      </div>
      <div className="flex h-96 w-full justify-evenly  max-sm:flex-col max-sm:h-auto max-sm:items-center">
        {images &&
          images.map((img) => (
            <img
              key={img._key}
              src={urlFor(img.asset._ref)}
              alt="App"
              className="flex-shrink h-96  object-contain max-sm:mb-5"
            />
          ))}
      </div>
    </div>
  );
}
