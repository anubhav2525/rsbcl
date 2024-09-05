
import React, { useState, useEffect } from 'react';

const images = [
  'https://excise.rajasthan.gov.in/WebsiteFiles/exe1.jpg',
  'https://www.rajasthandirect.com/wp-content/themes/rajasthandirect/thumbimg.php?src=https://www.rajasthandirect.com/wp-content/uploads/2013/01/Rajasthan-Excise-Department.jpg&w=770&h=260',
  'https://udaipurtimes.com/static/c1e/client/74416/migrated/44f78b61849757a4f7785851442234a3.jpg?width=1280&height=720&resizemode=4',
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full bg-slate-100 dark:bg-slate-800 ">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-1000  ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index}`} className="w-full h-24 sm:h-40 md:h-96 mx-1" />
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 ml-3 rounded-full"
      >
        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z" clipRule="evenodd" />
        </svg>

      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 mr-3 rounded-full"
      >
        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd" />
        </svg>

      </button>
    </div>
  )
}

export default Carousel
