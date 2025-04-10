import React from 'react';
import Image from "next/image";
// Removed unused Link import
import Navbar from "../../components/navbar";

const meeraketImage = "/Meerkat.jpeg";

export default function Meeraket() {
    return (
        <div>
            <Navbar />

            <div className="flex space-x-100 m-10">
                <h1 className="text-7xl text-blue-500 ml-100 mt-20">Meeraket</h1>
                <Image 
                    src={meeraketImage} 
                    alt="Meeraket"
                    height={500}
                    width={500}>
                </Image>
            </div>

            <div className="flex mx-40">
                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <h2 className="m-5 text-3xl text-blue-500">More About Meerakets</h2>
                    <p className="ml-5 mb-5 text-md text-blue-300">Meerakets are small mammals belonging to the mongoose family, native to southern Africa.</p>
                    <h3 className="ml-5 text-lg text-blue-500">Natural Habitat:</h3>
                    <p className="ml-10 mb-5 mr-5 text-md text-blue-300">Meerakets live in arid regions, including deserts and savannas.</p>
                    <h3 className="ml-5 text-lg text-blue-500">Diet:</h3>
                    <p className="ml-10 mb-5 mr-5 text-md text-blue-300">Meerakets primarily eat insects, but they also consume small vertebrates, eggs, and plants.</p>
                    <h3 className="ml-5 text-lg text-blue-500">Conservation Status:</h3>
                    <p className="ml-10 mb-5 text-md text-blue-300">Least Concern</p>
                </div>

                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <h2 className="text-3xl text-blue-500">Find Meerakets at the Calgary Zoo</h2>
                    <p className="text-blue-300">Put a map or something showing where the Meeraket exhibit is located</p>
                </div>
            </div>
        </div>
    );
}
