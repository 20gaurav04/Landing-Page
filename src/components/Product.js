import React from 'react';
import { Card } from "flowbite-react";
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.jpg';
import card6 from '../assets/card6.jpg';

function Product() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mt-20" id='products'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <Card className="w-full max-w-xs sm:max-w-sm font-serif hover:-translate-y-5 hover:border-b-4 hover:border-red-500 transition-all duration-300 hover:shadow-2xl " imgAlt="Demon Slayer Tshirt" imgSrc={card1}>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white font-serif">
              Demon Slayer Oversized
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            {/* Star Rating */}
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-3 mr-2 rounded bg-orange-200 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-black">
              4.8
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs-2000</span>
            <a href="#" className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Add to cart
            </a>
          </div>
        </Card>

        <Card className="w-full max-w-xs sm:max-w-sm font-serif hover:-translate-y-5 hover:border-b-4 hover:border-red-500 transition-all duration-300 hover:shadow-2xl" imgAlt="Demon Slayer Tshirt" imgSrc={card2}>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white font-serif">
              Breaking Bad Loose FIt
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            {/* Star Rating */}
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-3 mr-2 rounded bg-orange-200 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-black">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs-1899</span>
            <a href="#" className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Add to cart
            </a>
          </div>
        </Card>

        <Card className="w-full max-w-xs sm:max-w-sm font-serif hover:-translate-y-5 hover:border-b-4 hover:border-red-500 transition-all duration-300 hover:shadow-2xl" imgAlt="Demon Slayer Tshirt" imgSrc={card3}>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white font-serif">
              Pink Panther 
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            {/* Star Rating */}
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-3 mr-2 rounded bg-orange-200 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-black">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs-2200</span>
            <a href="#" className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Add to cart
            </a>
          </div>
        </Card>

        <Card className="w-full max-w-xs sm:max-w-sm font-serif hover:-translate-y-5 hover:border-b-4 hover:border-red-500 transition-all duration-300 hover:shadow-2xl" imgAlt="Demon Slayer Tshirt" imgSrc={card4}>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white font-serif">
              DeadPool SemiFit
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            {/* Star Rating */}
            {[...Array(4)].map((_, index) => (
              <svg key={index} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-3 mr-2 rounded bg-orange-200 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-black">
              4.8
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs-1600</span>
            <a href="#" className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Add to cart
            </a>
          </div>
        </Card>

        <Card className="w-full max-w-xs sm:max-w-sm font-serif hover:-translate-y-5 hover:border-b-4 hover:border-red-500 transition-all duration-300 hover:shadow-2xl" imgAlt="Demon Slayer Tshirt" imgSrc={card5}>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white font-serif">
              Loose Fit Denim Lowers
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            {/* Star Rating */}
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-3 mr-2 rounded bg-orange-200 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-black">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs-2800</span>
            <a href="#" className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Add to cart
            </a>
          </div>
        </Card>

        <Card className="w-full max-w-xs sm:max-w-sm font-serif hover:-translate-y-5 hover:border-b-4 hover:border-red-500 transition-all duration-300 hover:shadow-2xl" imgAlt="Demon Slayer Tshirt" imgSrc={card6}>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white font-serif">
              Doodles BLack
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            {/* Star Rating */}
            {[...Array(4)].map((_, index) => (
              <svg key={index} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-3 mr-2 rounded bg-orange-200 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-black">
              4.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs-1300</span>
            <a href="#" className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Add to cart
            </a>
          </div>
        </Card>

       
      </div>
    </div>
  );
}

export default Product;
