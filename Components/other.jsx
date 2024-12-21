import Image from "next/image";
import React from "react";
import one from "../Assets/client1.png";
import two from "../Assets/client2.png";
import three from "../Assets/client3.png";
import four from "../Assets/client4.png";
import five from "../Assets/client5.png";

function Other() {
  return (
    <div className="bg-blue-500 p-6 flex justify-center items-center">
      <div className="flex flex-wrap justify-center space-x-5 sm:space-x-2 md:space-x-3 lg:space-x-4">
        <div className="transition-transform transform hover:translate-x-2 w-20 sm:w-24 md:w-32 lg:w-40">
          <Image className="w-full" src={one} alt="Client 1" />
        </div>
        <div className="transition-transform transform hover:translate-x-2 w-20 sm:w-24 md:w-32 lg:w-40">
          <Image className="w-full" src={two} alt="Client 2" />
        </div>
        <div className="transition-transform transform hover:translate-x-2 w-20 sm:w-24 md:w-32 lg:w-40">
          <Image className="w-full" src={three} alt="Client 3" />
        </div>
        <div className="transition-transform transform hover:translate-x-2 w-20 sm:w-24 md:w-32 lg:w-40">
          <Image className="w-full" src={four} alt="Client 4" />
        </div>
        <div className="transition-transform transform hover:translate-x-2 w-20 sm:w-24 md:w-32 lg:w-40">
          <Image className="w-full" src={five} alt="Client 5" />
        </div>
      </div>
    </div>
  );
}

export { Other };
