"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from '../Assets/logo.png';

function HeaderSectionTwo() {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Show the button when the user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-4">
                <div>
                    <Image className="cursor-pointer" src={Logo} alt="Logo" />
                </div>
                <ul className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2 sm:mt-0">
                    {["Home", "Doctors", "Services", "Pages", "Blogs", "Contact Us"].map((item, index) => (
                        <li key={index} className="px-3 cursor-pointer relative group">
                            <span className="hover:text-blue-600">{item}</span>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>
                <button className="relative overflow-hidden px-6 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group mt-2 sm:mt-0">
                    <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    <span className="relative z-10">Book Appointment</span>
                </button>
            </div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition"
                >
                      Scroll to Top
                </button>
            )}
        </>
    );
}

export { HeaderSectionTwo };
