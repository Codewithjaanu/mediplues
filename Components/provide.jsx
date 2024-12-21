import Image from "next/image";
import React from "react";
import center from "../Assets/section-img.png";
import Sugger from "../Assets/scissors.png";
import teeth from "../Assets/tooth.png";
import Broken from "../Assets/broken-heart.png";
import Right from "../Assets/tick.png";
import Wrong from "../Assets/x-mark.png";
function Provide() {
    return (
        <>
           <div className="mt-6">
           <div className=" bg-gray-100  ">
                <div className="mt-10">
                    <h1 className="text-center text-3xl font-medium">We Provide You The Best <br />Treatment In Resonable<br /> Price</h1>
                    <div className="flex justify-center mt-4">
                        <Image className="items-center" src={center} width={50} height={50} alt="Center Icon" />
                    </div>
                    <p className="text-center text-zinc-400 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> praesent aliquet. pretiumts
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 p-4">
                    <div className="bg-white border rounded-lg shadow-lg p-6 max-w-xs w-full">
                        <div className="flex justify-center">
                            <Image src={Sugger} width={50} height={50} alt="Plastic Surgery Icon" />
                        </div>
                        <h1 className="text-2xl text-center mt-4">Plastic Surgery</h1>
                        <p className="text-center">
                            <span className="text-[#1a76d1] text-3xl">$199</span> / Per Visit
                        </p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex justify-between items-center">
                                Lorem ipsum dolor sit
                                <Image src={Right} width={10} height={10} alt="Right Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Cubitur sollicitudin fentum
                                <Image src={Right} width={10} height={10} alt="Right Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Nullam interdum enim
                                <Image src={Wrong} width={10} height={10} alt="Wrong Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Donec ultricies metus
                                <Image src={Wrong} width={10} height={10} alt="Wrong Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Pellentesque eget nibh
                                <Image src={Wrong} width={10} height={10} alt="Wrong Icon" />
                            </li>
                        </ul>
                        <div className="flex justify-center items-center mt-4">
                            <button className="relative overflow-hidden px-20 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group mt-2 sm:mt-0">
                                <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                <span className="relative z-10">Book Now</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border rounded-lg shadow-lg p-6 max-w-xs w-full">
                        <div className="flex justify-center">
                            <Image src={teeth} width={50} height={50} alt="Teeth Whitening Icon" />
                        </div>
                        <h1 className="text-2xl text-center mt-4">Teeth Whitening</h1>
                        <p className="text-center">
                            <span className="text-[#1a76d1] text-3xl">$199</span> / Per Visit
                        </p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex justify-between items-center">
                                Lorem ipsum dolor sit
                                <Image src={Right} width={10} height={10} alt="Right Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Cubitur sollicitudin fentum
                                <Image src={Right} width={10} height={10} alt="Right Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Nullam interdum enim
                                <Image src={Wrong} width={10} height={10} alt="Wrong Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Donec ultricies metus
                                <Image src={Wrong} width={10} height={10} alt="Wrong Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Pellentesque eget nibh
                                <Image src={Wrong} width={10} height={10} alt="Wrong Icon" />
                            </li>
                        </ul>
                        <div className="flex justify-center items-center mt-4">
                            <button className="relative overflow-hidden px-20 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group mt-2 sm:mt-0">
                                <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                <span className="relative z-10">Book Now</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border rounded-lg shadow-lg p-6 max-w-xs w-full">
                        <div className="flex justify-center">
                            <Image src={Broken} width={50} height={50} alt="Heart Surgery Icon" />
                        </div>
                        <h1 className="text-2xl text-center mt-4">Heart Surgery</h1>
                        <p className="text-center">
                            <span className="text-[#1a76d1] text-3xl">$199</span> / Per Visit
                        </p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex justify-between items-center">
                                Lorem ipsum dolor sit
                                <Image src={Right} width={10} height={10} alt="Right Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Cubitur sollicitudin fentum
                                <Image src={Right} width={10} height={10} alt="Right Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Nullam interdum enim
                                <Image src={Wrong} width={10} height={10} alt="Wrong Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Donec ultricies metus
                                <Image src={Wrong} width={10} height={10} alt="Wrong Icon" />
                            </li>
                            <li className="flex justify-between items-center">
                                Pellentesque eget nibh
                                <Image src={Wrong} width={10} height={10} alt="Wrong Icon" />
                            </li>
                        </ul>
                        <div className="flex justify-center items-center mt-4">
                            <button className="relative overflow-hidden px-20 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group mt-2 sm:mt-0">
                                <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                                <span className="relative z-10">Book Now</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
           </div>
        </>
    )
}
export { Provide };