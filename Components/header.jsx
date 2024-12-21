import Image from "next/image";
import React from "react";
import email from '../Assets/mail.png';
import phone from '../Assets/phone-call.png';

function Header() {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center py-2 px-4">
                {/* Navigation Links */}
                <ul className="flex flex-wrap justify-center sm:justify-start list-none gap-4 mb-2 sm:mb-0">
                    <li className="p-2 cursor-pointer">About</li>
                    <li className="p-2 cursor-pointer">Doctors</li>
                    <li className="p-2 cursor-pointer">Contact</li>
                    <li className="p-2 cursor-pointer">FAQ</li>
                </ul>

                {/* Contact Information */}
                <ul className="flex flex-wrap justify-center sm:justify-end list-none gap-4">
                    <li className="p-2 cursor-pointer flex items-center gap-2 text-gray-700">
                        <Image src={phone} width={15} height={10} alt="Phone icon" />
                        +880 1234 56789
                    </li>
                    <li className="p-2 cursor-pointer flex items-center gap-2 text-gray-700">
                        <Image src={email} width={15} height={10} alt="Email icon" />
                        email@domain.com
                    </li>
                </ul>
            </div>
            <hr />
        </>
    );
}

export { Header };