import React from "react";
import Image from "next/image";
import center from "../Assets/section-img.png";
import DoctorAndMiss from "../Assets/contact-img.png";

function Appointment() {
    return (
        <div className="mt-12 px-4">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-medium">
                    We Are Always Ready to<br /> Help You. Book An<br /> Appointment
                </h1>
                <div className="flex justify-center mt-4">
                    <Image src={center} width={50} height={50} alt="Center Icon" />
                </div>
                <p className="text-zinc-400 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> praesent aliquet pretiumts
                </p>
            </div>

            {/* Form and Image Section */}
            <div className="flex flex-col lg:flex-row justify-around items-center mt-10 gap-8">
                {/* Form Section */}
                <div className="w-full max-w-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                        />
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                        >
                            <option>Department</option>
                            <option>Cardiology</option>
                            <option>Neurology</option>
                            <option>Orthopedics</option>
                        </select>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                        >
                            <option>Doctor</option>
                            <option>Dr. Smith</option>
                            <option>Dr. Johnson</option>
                            <option>Dr. Williams</option>
                        </select>
                        <input
                            type="date"
                            className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
                        />
                    </div>

                    <textarea
                        placeholder="Message"
                        className="w-full mt-4 px-4 py-2 border border-gray-300 rounded outline-none"
                        rows="4"
                    ></textarea>

                    <div className="mt-4">
                        <button className="relative overflow-hidden px-6 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group">
                            <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                            <span className="relative z-10">Book Appointment</span>
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full max-w-sm">
                    <Image src={DoctorAndMiss} alt="Doctor and Patient" width={400} height={400} />
                </div>
            </div>
        </div>
    );
}

export { Appointment };
