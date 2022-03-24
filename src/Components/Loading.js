import React from "react";

const Loading = () => {
    const imgLoader = <div className="bg-gray-500 h-full w-full animate-pulse rounded-lg object-cover"></div>
    const h3Loader = <div className="bg-gray-500 h-6 w-1/2 rounded-lg animate-pulse my-4"></div>
    const pLoader = <div className="bg-gray-500 h-4 w-1/3 rounded-lg animate-pulse my-2"></div>
  return (
    <div className="container sm:h-full h-5/6 rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white sm:pb-52 pb-40 object-fill">
      {imgLoader}
      <div className="p-4">
        {h3Loader}
        {pLoader}
        {pLoader}
        {pLoader}
      </div>
    </div>
  );
};

export default Loading;
