import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";

const mooseImage = "/moose.jpg";


export default function Moose() {
    return (
        <div>
            <Navbar />

            <div className="flex space-x-100 m-10">
                <text className="text-7xl text-blue-500 ml-100 mt-20">Moose</text>
                <Image 
                    src={mooseImage} 
                    alt="Moose image"
                    height={500}
                    width={500}>
                </Image>
            </div>

            <div className="flex mx-40">
                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <text className="m-5 text-3xl text-blue-500">More About Moose</text>
                    <text className="ml-5 mb-5 text-md text-blue-300">Moose are </text>
                    <text className="ml-5 text-lg text-blue-500">Natural Habitat:</text>
                    <text className="ml-10 mb-5 mr-5 text-md text-blue-300"> Moose are found in </text>
                    <text className="ml-5 text-lg text-blue-500">Diet:</text>
                    <text className="ml-10 mb-5 mr-5 text-md text-blue-300">Moose primarily eat </text>
                    <text className="ml-5 text-lg text-blue-500">Conservation Status:</text>
                    <text className="ml-10 mb-5 text-md text-blue-300">Not Endangered</text>
                    
                </div>

                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <text className="text-3xl text-blue-500">Find Moose at the Calgary Zoo</text>
                    <text className="text-blue-300">Put a map or something showing where the Moose exhibit is located</text>
                </div>
            </div>
            
        </div>
        
        
    )
}
