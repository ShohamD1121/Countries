import React from 'react';
import Loading from './Loading';

const cardsLoading = () => {
    
    return (
        <div className="container h-full sm:w-screen w-5/6 text-center grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-16 mx-auto">
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      );
}

export default cardsLoading;