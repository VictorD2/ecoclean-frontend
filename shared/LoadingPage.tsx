import Image from 'next/image';
import React from 'react';
import logo from '../assets/img/logoEco.png';
const LoadingPage = () => {
  return (
    <main className="w-screen h-screen relative bg-layout flex justify-center items-center">
      <div className="relative rounded-full bg-layout animate-spin h-56 w-56 border-8 border-b-secondary border-t-secondary border-l-primary border-r-primary"></div>
      <div className="absolute">
        <Image width={logo.width} height={logo.height} src={logo.src}></Image>
      </div>
    </main>
  );
};

export default LoadingPage;
