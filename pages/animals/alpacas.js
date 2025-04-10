import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";

const alpacaImage = "/alpaca.jpg";


export default function Alpacas() {



    return (
        <div>
            <Navbar />

            <div className="flex space-x-100 m-10">
                <text className="text-7xl text-blue-500 ml-100 mt-20">Alpacas</text>
                <Image 
                    src={alpacaImage} 
                    alt="alpaca image"
                    height={500}
                    width={500}>
                </Image>
            </div>

            <div className="flex mx-40">
                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <text className="m-5 text-3xl text-blue-500">More About Alpacas</text>
                    <text className="ml-5 mb-5 text-md text-blue-300">Alpacas are South American mammals that have been successfully domesticated and are kept for the large amounts of wool they produce</text>
                    <text className="ml-5 text-lg text-blue-500">Natural Habitat:</text>
                    <text className="ml-10 mb-5 mr-5 text-md text-blue-300"> Alpacas are found in South America, primarily in the mountainous regions of Colombia, Ecuador, Chile, and Argentina</text>
                    <text className="ml-5 text-lg text-blue-500">Diet:</text>
                    <text className="ml-10 mb-5 mr-5 text-md text-blue-300">Alpacas primarily eat grass and other greenery, however they have also adapted to eating bark and plant stems, due to the low quantity of food in their natural habitat</text>
                    <text className="ml-5 text-lg text-blue-500">Conservation Status:</text>
                    <text className="ml-10 mb-5 text-md text-green-500">Not Endangered</text>
                    
                </div>

                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <text className="text-3xl text-blue-500">Find Alpacas at the Calgary Zoo</text>
                    <text className="text-blue-300">Put a map or something showing where the alpaca exhibit is located</text>
                </div>
            </div>
            
        </div>
        
        
    )
}
