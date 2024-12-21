import React from 'react';
import slide from "../Assets/slider.jpg";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col md:flex-row items-center justify-between px-10 py-20"
      style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
    >
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800">
          We Provide <span className="text-blue-600">Medical</span> Services That You Can <span className="text-blue-600">Trust!</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="relative overflow-hidden px-6 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group mt-2 sm:mt-0">
            <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">Get Appointment</span>
          </button>
          <button className="relative overflow-hidden px-6 py-2 border rounded text-white bg-black hover:bg-transparent transition duration-300 group mt-2 sm:mt-0">
            <span className="absolute inset-0 w-full h-full bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">About Us</span>
          </button>
        </div>
      </div>

      {/* Image Section - Hidden on Mobile */}
      <div className="hidden md:block">
        <Image src={slide} alt="Doctor" className="max-h-96" />
      </div>
    </div>
  );
};

export default HeroSection;
