// src/components/Spinner.js
import React from 'react';
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex w-full min-h-full justify-center items-center'>
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </div>
  );
};

export default Spinner;
