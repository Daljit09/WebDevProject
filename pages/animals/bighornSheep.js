import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Navbar from "../../components/navbar";

const bhSheepImage = "/bighornSheep.jpg";


export default function BighornSheep() {



    return (
        <div>
            <Navbar />
            
            <div className="flex space-x-100 m-10">
                <text className="text-7xl text-blue-500 ml-100 mt-20">Bighorn Sheep</text>
                <Image 
                    src={bhSheepImage} 
                    alt="Bighorn Sheep image"
                    height={500}
                    width={500}>
                </Image>
            </div>

            <div className="flex mx-40">
                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <text className="m-5 text-3xl text-blue-500">More About Bighorn Sheep</text>
                    <text className="ml-5 mb-5 text-md text-blue-300">Bighorn Sheep are a species of sheep that is native to the mountains of North America. They get their name from the massive pair of horns on their head that can weigh up to a combined 14kg</text>
                    <text className="ml-5 text-lg text-blue-500">Natural Habitat:</text>
                    <text className="ml-10 mb-5 mr-5 text-md text-blue-300"> Bighorn Sheep can be found in the mountainous regions of Western North America, as far North as Canada and as far South as Mexico </text>
                    <text className="ml-5 text-lg text-blue-500">Diet:</text>
                    <text className="ml-10 mb-5 mr-5 text-md text-blue-300">Bighorn Sheep are herbivores and their diet consists of grasses, plants, and shrubs</text>
                    <text className="ml-5 text-lg text-blue-500">Conservation Status:</text>
                    <text className="ml-10 mb-5 text-md text-green-500">Least Concern</text>
                    
                </div>

                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <text className="text-3xl text-blue-500">Find Bighorn Sheep at the Calgary Zoo</text>
                    <text className="text-blue-300">Put a map or something showing where the Bighorn Sheep exhibit is located</text>
                </div>
            </div>
            
        </div>
        
        
    )
}
