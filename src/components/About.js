import React from 'react';
import about from '../assets/about.png';

function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10" id='about'>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-slate-200 p-6 lg:h-96 rounded-md shadow-md">
        <div className="flex-1 lg:pr-8">
          <h1 className="mb-4 font-bold text-2xl sm:text-3xl lg:text-4xl font-serif">What We Actually Do?</h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg font-medium">
            At UrbanZ, we blend contemporary fashion with urban edge, crafting high-quality clothing that resonates with modern style. Our designs are inspired by the vibrant energy of city life, offering trendy and comfortable apparel for those who embrace individuality and confidence. UrbanZ is your go-to brand for effortlessly stylish looks.
          </p>
        </div>
        <div className="flex-1 mt-8 lg:mt-0">
          <img src={about} alt="about" className="w-full h-auto max-w-xs lg:max-w-md rounded-md shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default About;
