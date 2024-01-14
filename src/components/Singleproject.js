import React from 'react';
import client from '../client';
import imageUrlBuilder from '@sanity/image-url';

export default function Singleproject({ name, description, technologies, images }) {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className="w-full flex-col justify-center border-b-2 mt-5">
      <p className="font-bold text-lg">{name}</p>
      <p className="font-thin mb-5 ">{description}</p>
      {/* <p>{technologies}</p> */}
      <div className="flex h-96 w-full justify-evenly">
        {images &&
          images.map((img) => (
            <img
              key={img._key}
              src={urlFor(img.asset._ref)}
              alt="App"
              className="flex-shrink h-96 w-1/3 object-contain"
            />
          ))}
      </div>
    </div>
  );
}
