import React from "react";

function Details({title, img_url, population, region, capital}) {
  return (
    <div className="container sm:h-full h-fit rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4 sm:w-full w-5/6 mx-auto">
      <img
        src={img_url}
        className="h-1/2 w-full rounded-tl-lg rounded-tr-lg object-cover"
        alt={title}
      />
      <div className="p-4">
        <h3 className="font-bold mb-4">{title}</h3>
        <p className="text-xs">
          Population : 
          <span className="text-gray-700 dark:text-gray-300"> {population}</span>
        </p>
        <p className="text-xs">
          Region :
          <span className="text-gray-700 dark:text-gray-300"> {region}</span>
        </p>
        <p className="text-xs">
          Capital :
          <span className="text-gray-700 dark:text-gray-300"> {capital}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
