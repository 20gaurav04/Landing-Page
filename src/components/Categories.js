import React from 'react';
import { Card } from "flowbite-react";
import men from '../assets/men.jpg';
import women from '../assets/women.jpg';
import genz from '../assets/GenZ.png';
import './Categories.css';
import puma from '../assets/puma.jpg';
import zara from '../assets/zara.png';
import nike from '../assets/nike.png';
import balen from '../assets/balen.jpg';
import vans from '../assets/vans.jpg';

function Categories() {
  return (
    <div>
      {/* Header */}
      <div className="relative text-center mt-10" id="categories">
        <h2 className="relative inline-block z-10 px-4 bg-white font-bold font-serif">Shop Categories</h2>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-gray-300"></div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mt-5 mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer px-10">
        <Card className="tag mx-auto max-w-xs hover:border-b-4 hover:border-red-500 transition-all duration-300 hover:shadow-2xl" imgAlt="clothes" imgSrc={men}>
          <h5 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Men's
          </h5>
        </Card>

        <Card className="tag mx-auto max-w-s hover:border-b-4 hover:border-red-500 transition-all duration-300 hover:shadow-2xl" imgAlt="clothes" imgSrc={genz}>
          <h5 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Millennials
          </h5>
        </Card>

        <Card className="tag mx-auto max-w-xs hover:border-b-4 hover:border-red-500 transition-all duration-300 hover:shadow-2xl" imgAlt="clothes" imgSrc={women}>
          <h5 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Women's
          </h5>
        </Card>
      </div>

      {/* Collaborations Section */}
      <div className="w-full bg-black text-white py-10">
        <div className='flex justify-around items-center p-4 flex-wrap gap-4'>
          <img src={puma} alt="Puma" className='w-20 h-20 rounded-full' />
          <img src={zara} alt="Zara" className='w-20 h-20 rounded-full' />
          <img src={nike} alt="Nike" className='w-20 h-20 rounded-full' />
          <img src={balen} alt="Balenciaga" className='w-20 h-20 rounded-full' />
          <img src={vans} alt="Vans" className='w-20 h-20 rounded-full' />
        </div>
        <div>
          <h3 className='mt-4 font-serif text-center tracking-wide text-3xl hover:text-red-600 hover:text-4xl ease-in-out duration-300'>Collaborations</h3>
        </div>
      </div>
    </div>
  )
}

export default Categories;
