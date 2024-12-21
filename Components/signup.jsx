import React from "react";

function SignUp() {
    return (
        <div className="bg-slate-100 py-20 px-10 md:px-8">
            <div className="flex flex-col md:flex-row justify-around items-center gap-4">
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-semibold">Sign up for our newsletter</h1>
                    <p className="text-sm md:text-base mt-2">
                        Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, <br className="hidden md:block"/>
                        homero alterum.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 md:mt-0">
                    <input 
                        placeholder="Your Email Address" 
                        className="px-4 py-2 border border-gray-300 rounded outline-none w-full sm:w-auto sm:flex-1"
                    />
                    <button className="relative overflow-hidden px-6 py-2 border rounded text-white bg-blue-500 hover:bg-transparent transition duration-300 group">
                        <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                        <span className="relative z-10">Subscribe</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export { SignUp };
