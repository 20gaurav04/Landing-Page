import React from 'react'
import { Card } from "flowbite-react";
import men from '../assets/men.jpg'
import women from '../assets/women.jpg'
import genz from '../assets/GenZ.png'
import './Categories.css'

function Categories() {
  return (
    <div>
    <div className="relative text-center mt-10">
  <h2 className="relative inline-block z-10 px-4 bg-white font-bold">Shop Categories</h2>
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t-2 border-gray-300"></div>
  </div>
</div>

<div class="mt-5 mb-5 flex justify-around cursor-pointer">
    <Card className=" tag mx-4 max-w-60" imgAlt="clothes" imgSrc={men}>
      <h5 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
        Men's
      </h5>
    
    </Card>
    
    <Card className=" tag mx-4 max-w-[38rem] object-contain" imgAlt="clothes" imgSrc={genz}>
      <h5 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
        Millennials
      </h5>
    
    </Card>
    
    <Card className=" tag mx-4 max-w-60" imgAlt="clothes" imgSrc={women}>
      <h5 className="text-2xl font-bold  text-center text-gray-900 dark:text-white">
        Women's
      </h5>


    
    </Card>
    </div>
    <div className=" mt-20 max-w-full h-20 bg-slate-600"></div>
    </div>
  )
}

export default Categories
