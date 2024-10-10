import React, { useEffect, useState } from 'react';
import image1 from '../Assests/Image1.webp'
import image2 from '../Assests/Image4.jpg'
import image3 from '../Assests/Images6.png'

const Carousel = () => {
  const items = [
    {
    
      text: 'Data to enrich your online business 1',
      bgImage: image1,
    },
    {
     
      text: 'Data to enrich your online business 2',
      bgImage: image2,
    },
    {
     
      text: 'Data to enrich your online business 3',
      bgImage: image3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [items.length]);

  return (
    <div
      className="bg-white"
      style={{
        backgroundImage: `url(${items[currentIndex].bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:"800px",
        transition: 'background-image 0.5s ease-in-out', 
      }}
    >
      <div className="lg:hidden" role="dialog" aria-modal="true">
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            {/* <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {items[currentIndex].text}
            </h1> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
