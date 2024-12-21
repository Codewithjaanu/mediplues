import Image from "next/image";
import React from "react";
import Blog1 from "../Assets/blog1.jpg";
import Blog2 from "../Assets/blog2.jpg";
import Blog3 from "../Assets/blog3.jpg";
import center from "../Assets/section-img.png";

function Cards() {
    return (
        <>
            <div className="p-4 md:p-8 lg:p-12 mt-6">
                <div className="mt-10 md:mt-16 lg:mt-18">
                    <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium">
                        Keep up with Our Most <br /> Recent Medical News.
                    </h1>
                    <div className="flex justify-center mt-4">
                        <Image className="items-center" src={center} width={50} height={50} alt="Center Icon" />
                    </div>
                    <p className="text-center text-zinc-400 mt-2 text-sm md:text-base lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit <br className="hidden md:inline" /> praesent aliquet. pretiumts
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around mt-10 gap-10 lg:gap-0 px-4">
                    <div className="border border-white max-w-xs md:max-w-sm lg:max-w-md w-full lg:w-auto">
                        <div>
                            <Image src={Blog1} width={280} height={180} alt="" className="w-full" />
                        </div>
                        <div className="p-3">
                            <button className="relative overflow-hidden px-6 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group mt-2 sm:mt-0">
                                <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                <span className="relative z-10">22 Aug, 2090</span>
                            </button>
                            <h1 className="text-xl md:text-2xl mt-2">We have announced <br /> our new product.</h1>
                            <p className="text-sm md:text-base mt-2">
                                Lorem ipsum dolor a sit ameti,<br /> consectetur adipisicing elit, sed do<br /> eiusmod tempor incididunt sed do<br /> incididunt sed.
                            </p>
                        </div>
                    </div>
                    <div className="border border-white max-w-xs md:max-w-sm lg:max-w-md w-full lg:w-auto">
                        <div>
                            <Image src={Blog2} width={280} height={180} alt="" className="w-full" />
                        </div>
                        <div className="p-3">
                            <button className="relative overflow-hidden px-6 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group mt-2 sm:mt-0">
                                <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                <span className="relative z-10">20 Jun, 9090</span>
                            </button>
                            <h1 className="text-xl md:text-2xl mt-2">Top five ways for solving <br /> teeth problems.</h1>
                            <p className="text-sm md:text-base mt-2">
                                Lorem ipsum dolor a sit ameti,<br /> consectetur adipisicing elit, sed do<br /> eiusmod tempor incididunt sed do<br /> incididunt sed.
                            </p>
                        </div>
                    </div>
                    <div className="border border-white max-w-xs md:max-w-sm lg:max-w-md w-full lg:w-auto">
                        <div>
                            <Image src={Blog3} width={280} height={180} alt="" className="w-full" />
                        </div>
                        <div className="p-3">
                            <button className="relative overflow-hidden px-6 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group mt-2 sm:mt-0">
                                <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                <span className="relative z-10">22 May, 8989</span>
                            </button>
                            <h1 className="text-xl md:text-2xl mt-2">We provide highly <br /> business solutions.</h1>
                            <p className="text-sm md:text-base mt-2">
                                Lorem ipsum dolor a sit ameti,<br /> consectetur adipisicing elit, sed do<br /> eiusmod tempor incididunt sed do<br /> incididunt sed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Cards };
