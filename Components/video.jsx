import React from "react";
import center from "../Assets/section-img.png";
import Image from "next/image";
import Dap from "../Assets/dope.jpg";
import Play from "../Assets/play.png";

function Video() {
    return (
        <div className="p-12">
            <div className="mt-10 text-center">
                <h1 className="text-2xl md:text-3xl font-medium">
                    We Offer Different<br /> Services To Improve Your<br /> Health
                </h1>
                <div className="flex justify-center mt-4">
                    <Image src={center} width={50} height={50} alt="Center Icon" />
                </div>
                <p className="text-center text-zinc-400 mt-2 text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> praesent aliquet. pretiumts
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center mt-8 space-y-6 md:space-y-0">
                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-xl font-semibold">Who We Are</h1>
                    <div className="border-b-2 border-blue-600 w-16 mb-4"></div>
                    <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas pharetra antege vel est lobortis, a commodo magna <br /> rhoncus. In quis nisi non emet quam pharetra commodo.
                    </p>
                    <p className="text-zinc-600 text-sm md:text-base leading-relaxed mt-2">
                        Class aptent taciti sociosqu ad litora torquent per conubia <br /> nostra, per inceptos himenaeos.
                    </p>
                    <div className="flex flex-col space-y-2 mt-4">
                        <div className="flex gap-2">
                            <div className="flex items-center">
                                <Image src={Play} width={16} height={16} alt="" />
                                <p className="ml-2 text-sm md:text-base">Maecenas vitae luctus nibh.</p>
                            </div>

                            <div className="flex items-center">
                                <Image src={Play} width={16} height={16} alt="" />
                                <p className="ml-2 text-sm md:text-base">Maecenas vitae luctus nibh.</p>
                            </div>
                        </div>
                      <div className="flex gap-2">
                      <div className="flex items-center">
                            <Image src={Play} width={16} height={16} alt="" />
                            <p className="ml-2 text-sm md:text-base">Duis massa massa..</p>
                        </div>

                        <div className="flex items-center">
                            <Image src={Play} width={16} height={16} alt="" />
                            <p className="ml-2 text-sm md:text-base">Duis massa massa..</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                      <div className="flex items-center">
                            <Image src={Play} width={16} height={16} alt="" />
                            <p className="ml-2 text-sm md:text-base">Aliquam feugiat interdum.</p>
                        </div>

                        <div className="flex items-center">
                            <Image src={Play} width={16} height={16} alt="" />
                            <p className="ml-2 text-sm md:text-base">Aliquam feugiat interdum.</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <Image src={Dap} width={550} height={500} className="rounded-sm" alt="Who We Are Image" />
                </div>
            </div>
        </div >
    );
}

export { Video };
