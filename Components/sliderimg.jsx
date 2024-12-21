import React from "react";
import center from "../Assets/section-img.png";
import Image from "next/image";
import fone from "../Assets/pexels-cottonbro-7579831.jpg";
import ftwo from "../Assets/pexels-pranidchakan-boonrom-101111-1350560.jpg";

function SliderImg() {
    return (
        <>
            <div className="mt-10 md:mt-16 lg:mt-18 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                    We Maintain Cleanliness <br />Rules Inside Our Hospital
                </h1>
                <div className="flex justify-center mt-4">
                    <Image className="items-center" src={center} width={50} height={50} alt="Center Icon" />
                </div>
                <p className="text-zinc-400 mt-2 text-sm md:text-base lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit <br className="hidden md:inline" /> praesent aliquet. pretiumts
                </p>
            </div>

            {/* Flex container for images */}
            <div className="flex flex-col md:flex-row justify-between px-6 mt-8 md:px-9 lg:px-12 gap-4">
                {/* First Image */}
                <div className="relative w-full md:w-1/2 px-2 group">
                    <Image className="w-full h-auto rounded-lg" src={fone} alt="First Image" />
                    <button className="absolute left-1/2 bottom-10 transform -translate-x-1/2 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 opacity-0 group-hover:opacity-100 transition duration-300">
                        View Details
                    </button>
                </div>
                
                <div className="relative w-full md:w-1/2 px-2 group ">
                    <Image className="w-full h-auto rounded-lg" src={ftwo} alt="Second Image" />
                    <button className="absolute left-1/2 bottom-10 transform -translate-x-1/2 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 opacity-0 group-hover:opacity-100 transition duration-300">
                        View Details
                    </button>
                </div>
            </div>
        </>
    );
}

export { SliderImg };
