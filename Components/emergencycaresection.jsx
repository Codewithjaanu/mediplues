import React from 'react';

function EmergencyMedicalCare() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed">
          Do you need <br />
          Emergency Medical <br />
          Care? Call @ 1234<br /> 56789
        </h1>
        <p className="text-sm sm:text-base mt-2 md:mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Quisque porttitor dictum turpis nec gravida.
        </p>
        <div className="flex justify-center gap-3 mt-4">
          <button className="relative overflow-hidden px-4 sm:px-6 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group">
            <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">Contact Us</span>
          </button>
          <button className="relative overflow-hidden px-4 sm:px-6 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group">
            <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmergencyMedicalCare;
