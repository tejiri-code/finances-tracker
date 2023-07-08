import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='text-white w-screen h-screen flex items-center justify-center bg-purple-600'>
      <div className='max-w-[800px] mx-auto text-center'>
        <p className='text-black font-bold p-2'>Track Your Expenses</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl text-white font-bold md:py-6'>Spend w Me.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Take control of your</p>
          <TypeAnimation
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#521963]'
            sequence={[' Spending.', 1000, ' Finances.', 1000]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </div>
        <div>
          <p className='md:text-2xl text-xl font-bold text-black'>Monitor and manage your expenses with ease.</p>
          <Link to="/expense-tracker">
            <button className='bg-[#521963] hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
