import Image from 'next/image';
import React from 'react';
import facebook from "../Assets/facebook.png";
import Google from "../Assets/google.png";
import Twitter from "../Assets/twitter.png";
import V from "../Assets/letter-v.png";
import Pintrest from "../Assets/social.png";
function Footer() {
    return (
        <>
            <footer className="bg-blue-600 text-white py-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <div className="w-10 h-1 bg-white mb-4 mx-auto md:mx-0"></div>
                        <p className="text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.
                        </p>
                        <div className="flex justify-center md:justify-start mt-4 space-x-3">
                            <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
                                <Image alt='' src={facebook} width={20} />
                            </a>
                            <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
                                <Image src={Google} alt='' width={20} />
                            </a>
                            <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
                                <Image src={Twitter} alt='' width={20} />
                            </a>
                            <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
                                <Image src={V} alt='' width={20} />
                            </a>
                            <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
                                <Image src={Pintrest} alt='' width={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <div className="w-10 h-1 bg-white mb-4 mx-auto md:mx-0"></div>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">Our Cases</a></li>
                            <li><a href="#" className="hover:underline">Consulting</a></li>
                            <li><a href="#" className="hover:underline">Finance</a></li>
                            <li><a href="#" className="hover:underline">Testimonials</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Open Hours</h3>
                        <div className="w-10 h-1 bg-white mb-4 mx-auto md:mx-0"></div>
                        <p className="text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit do eiusmod tempor incididunt.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>Monday - Friday: 8.00 - 20.00</li>
                            <li>Saturday: 9.00 - 18.30</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <div className="w-10 h-1 bg-white mb-4 mx-auto md:mx-0"></div>
                        <p className="text-sm leading-relaxed mb-4">
                            Subscribe to our newsletter to get all our news in your inbox. Lorem ipsum dolor sit amet, consectetur.
                        </p>
                        <div className="flex px-6">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 w-full rounded-l-lg text-blue-600 placeholder-blue-600 outline-none"
                            />
                            <button className="bg-white text-blue-600 px-4 py-2 rounded-r-lg">➤</button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='text-center p-5 bg-white'>
                <p>© Copyright 2024 | All Rights Reserved by Siddharth & Yogesh & Jaanu</p>
            </div>
        </>
    );
}

export default Footer;
