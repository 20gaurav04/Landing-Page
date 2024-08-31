import React from 'react';
import { Carousel, Blockquote, Rating, RatingStar } from 'flowbite-react';

function Reviews() {
  return (
    <div className="container mx-auto px-4 sm:px-6 sm:mt-2 lg:px-8 mt-10">
      {/* Promotion Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-slate-600 bg-hero-pattern bg-blend-color-burn text-center lg:text-left p-6 mb-10 rounded-md shadow-md">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-serif">
          SEASON SALE IS LIVE NOW!
          <p className="text-xl sm:text-2xl mt-2">60% OFF ON SELECTED ITEMS</p>
        </h1>
        <button className="mt-4 lg:mt-0 w-full lg:w-auto max-w-xs px-4 py-2 bg-white text-black rounded-sm font-serif shadow-md hover:bg-red-600 active:bg-red-700">
          Shop Now
        </button>
      </div>

      {/* Reviews Carousel */}
      <div className="mb-10" id='reviews'>
        <Carousel className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        

          {/** Review 2 */}
          <figure className="mx-auto max-w-screen-md p-4">
            <div className="flex items-center justify-center mb-4">
              <Rating size="md">
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
              </Rating>
            </div>
            <Blockquote>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white text-justify font-serif">
                "UrbanZ exceeded my expectations!  This has become my go-to store for fashion. Highly recommended!."
              </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Neel Gupta</cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Varanasi, India</cite>
              </div>
            </figcaption>
          </figure>

          <figure className="mx-auto max-w-screen-md p-4">
            <div className="flex items-center justify-center mb-4">
              <Rating size="md">
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
              </Rating>
            </div>
            <Blockquote>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white text-justify font-serif">
                "Amazing Handeled! I have to say. All done extremely well.Would surely recommend to others."
              </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Radhika Sen</cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Kolkata,India</cite>
              </div>
            </figcaption>
          </figure>

          {/** Review 3 */}
          <figure className="mx-auto max-w-screen-md p-4">
            <div className="flex items-center justify-center mb-4">
              <Rating size="md">
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
              </Rating>
            </div>
            <Blockquote>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white text-justify font-serif">
                "The clothes are well-made. Delivery was prompt, and the sizing was just right. I’ll definitely be back for more!."
              </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Gaurav Sharma</cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Rajasthan, India</cite>
              </div>
            </figcaption>
          </figure>
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;
