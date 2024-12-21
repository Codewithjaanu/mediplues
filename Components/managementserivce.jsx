import Image from "next/image";
import React from "react";
import center from "../Assets/section-img.png";
import ambulanceimg from "../Assets/ambulance.png";
import stethoscopeimg from "../Assets/stethoscope.png";
import job from "../Assets/job-enrichment.png";

function Manageserivce() {
    return (
        <div className="mt-8">
            <h1 className="text-center text-3xl font-medium">
                We Are Always Ready to <br /> Help You & Your Family
            </h1>
            <div className="flex justify-center mt-4">
                <Image className="items-center" src={center} width={50} height={50} alt="Center Icon" />
            </div>
            <p className="text-center text-zinc-400 mt-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> praesent aliquet. pretiumts
            </p>
            <div className="flex flex-wrap justify-evenly gap-8 mt-16">
                <div className="text-center w-full sm:w-auto">
                    <div className="flex justify-center items-center">
                        <Image src={ambulanceimg} alt="Ambulance" width={50} height={50} />
                    </div>
                    <h1 className="text-2xl font-medium mt-4">Emergency Help</h1>
                    <p className="mt-3 text-zinc-400">
                        Lorem ipsum sit, consectetur<br /> adipiscing elit. Maecenas mi quam<br /> vulputate.
                    </p>
                </div>
                <div className="text-center w-full sm:w-auto">
                    <div className="flex justify-center items-center">
                        <Image src={job} alt="Pharmacy" width={50} height={50} />
                    </div>
                    <h1 className="text-2xl font-medium mt-4">Enriched Pharmacy</h1>
                    <p className="mt-3 text-zinc-400">
                        Lorem ipsum sit, consectetur<br /> adipiscing elit. Maecenas mi quam<br /> vulputate.
                    </p>
                </div>
                <div className="text-center w-full sm:w-auto">
                    <div className="flex justify-center items-center">
                        <Image src={stethoscopeimg} alt="Stethoscope" width={50} height={50} />
                    </div>
                    <h1 className="text-2xl font-medium mt-4">Medical Treatment</h1>
                    <p className="mt-3 text-zinc-400">
                        Lorem ipsum sit, consectetur<br /> adipiscing elit. Maecenas mi quam<br /> vulputate.
                    </p>
                </div>
            </div>
        </div>
    );
}

export { Manageserivce };
