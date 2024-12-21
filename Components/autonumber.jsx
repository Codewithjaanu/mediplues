import Image from "next/image";
import React from "react";
import Home from "../Assets/home.png";
import Contact from "../Assets/manager.png";
import Smile from "../Assets/smile.png";
import Office from "../Assets/office.png";

function Autonumber() {
    return (
        <div className="bg-[#1A76D1] py-10 mt-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                <div>
                    <div className="flex justify-center mb-2">
                        <Image src={Home} width={50} className="text-white" alt="Home Icon" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">3468</h2>
                    <p className="mt-2 text-sm md:text-base">Hospital Rooms</p>
                </div>
                <div>
                    <div className="flex justify-center mb-2">
                        <Image src={Contact} width={50} className="text-white" alt="Contact Icon" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">557</h2>
                    <p className="mt-2 text-sm md:text-base">Specialist Doctors</p>
                </div>
                <div>
                    <div className="flex justify-center mb-2">
                        <Image src={Smile} width={50} className="text-white" alt="Smile Icon" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">4379</h2>
                    <p className="mt-2 text-sm md:text-base">Happy Patients</p>
                </div>
                <div>
                    <div className="flex justify-center mb-2">
                        <Image src={Office} width={50} className="text-white" alt="Office Icon" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">32</h2>
                    <p className="mt-2 text-sm md:text-base">Years of Experience</p>
                </div>
            </div>
        </div>
    );
}

export { Autonumber };
