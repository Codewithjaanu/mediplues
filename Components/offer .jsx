import React from "react";
import center from "../Assets/section-img.png";
import Image from "next/image";
import General from "../Assets/office.png";
import Teeth from '../Assets/tooth.png';
import Heart from "../Assets/heart.png";
import Ear from "../Assets/earache.png";
import Eye from "../Assets/eye.png";
import Blood from "../Assets/blood-pressure.png";

function Offer() {
    return (
        <>
            <div className="px-5">
                <br/>
                <br/>
                <h1 className="text-center text-3xl font-medium">We Offer Different<br /> Services To Improve Your<br /> Health</h1>
                <div className="flex justify-center mt-4">
                    <Image className="items-center" src={center} width={50} height={50} alt="Center Icon" />
                </div>
                <p className="text-center text-zinc-400 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> praesent aliquet. pretiumts
                </p>
            </div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-6 px-28">
                <div className="text-start max-w-xs">
                    <div className="flex justify-start items-start gap-3">
                        <Image src={General} alt="" width={50} height={50} />
                        <h1 className="font-medium text-lg hover:text-[#1A76D1]">General Treatment</h1>
                    </div>
                    <p className="text-gray-500 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.
                    </p>
                </div>

                <div className="text-start max-w-xs">
                    <div className="flex justify-start items-start gap-3">
                        <Image src={Teeth} alt="" width={50} height={50} />
                        <h1 className="font-medium text-lg hover:text-[#1A76D1]">Teeth Whitening</h1>
                    </div>
                    <p className="text-gray-500 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.
                    </p>
                </div>

                <div className="text-start max-w-xs">
                    <div className="flex justify-start items-start gap-3">
                        <Image src={Heart} alt="" width={50} height={50} />
                        <h1 className="font-medium text-lg hover:text-[#1A76D1]">Heart Surgery</h1>
                    </div>
                    <p className="text-gray-500 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.
                    </p>
                </div>

                <div className="text-start max-w-xs">
                    <div className="flex justify-start items-start gap-3">
                        <Image src={Ear} alt="" width={50} height={50} />
                        <h1 className="font-medium text-lg hover:text-[#1A76D1]">Ear Treatment</h1>
                    </div>
                    <p className="text-gray-500 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.
                    </p>
                </div>

                <div className="text-start max-w-xs">
                    <div className="flex justify-start items-center gap-3">
                        <Image src={Eye} alt="" width={50} height={50} />
                        <h1 className="font-medium text-lg hover:text-[#1A76D1]">Vision Problems</h1>
                    </div>
                    <p className="text-gray-500 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.
                    </p>
                </div>

                <div className="text-start max-w-xs">
                    <div className="flex justify-start items-start gap-3">
                        <Image src={Blood} alt="" width={50} height={50} />
                        <h1 className="font-medium text-lg hover:text-[#1A76D1]">Blood Transfusion</h1>
                    </div>
                    <p className="text-gray-500 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.
                    </p>
                </div>
            </div>


        </>
    )
}
export { Offer };