import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
type AppCarousel = {
  images: string[];
};

const AppCarousel = ({ images }: AppCarousel) => {
  const [selected, setSelected] = useState<number>(0);

  const nextImage = () => {
    if (selected === images.length - 1) return setSelected(0);
    setSelected(selected + 1);
  };
  const prevImage = () => {
    if (selected === 0) return setSelected(images.length - 1);
    setSelected(selected - 1);
  };

  return (
    <div className="relative h-[calc(100vh-6rem)] w-full">
      <div className="relative w-full h-full overflow-hidden">
        {images.map((item, i) => {
          return (
            <div className={`${i === selected ? '' : 'hidden'} relative float-left w-full h-full`}>
              <img src={item} className="block w-full h-full" alt={`foto ${i + 1}`} />
            </div>
          );
        })}
      </div>
      <button
        onClick={nextImage}
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
      >
        <ChevronLeftIcon className="w-8 ml-16 text-layout" />
      </button>
      <button
        onClick={prevImage}
        className="absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
      >
        <ChevronRightIcon className="w-8 mr-16 text-layout" />
      </button>
    </div>
  );
};

export default AppCarousel;