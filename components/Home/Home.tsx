import React from 'react';
import AppCarousel from '../../elements/app_carousel';
import foto1 from '../../assets/img/carousel/item1.jpg';
import foto2 from '../../assets/img/carousel/item2.jpg';
import foto3 from '../../assets/img/carousel/item3.jpeg';

const images = [foto1.src, foto2.src, foto3.src];

const HomePage = () => {
  return (
    <>
      <AppCarousel images={images} />
    </>
  );
};

export default HomePage;
