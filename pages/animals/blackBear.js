import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";

const blackBear = "/blackBear.jpg";


export default function BlackBears() {
    return (
        <div>
            <Navbar />

            <div className="flex space-x-100 m-10">
                <text className="text-7xl text-blue-500 ml-100 mt-20">Black Bears</text>
                <Image 
                    src={blackBear} 
                    alt="Black Bear image"
                    height={500}
                    width={500}>
                </Image>
            </div>

            <div className="flex mx-40">
                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <text className="m-5 text-3xl text-blue-500">More About Black Bears</text>
                    <text className="ml-5 mb-5 text-md text-blue-300">Black Bears are the smallest type of bear in North America, however they are also the most commonly found bear in North America.</text>
                    <text className="ml-5 text-lg text-blue-500">Natural Habitat:</text>
                    <text className="ml-10 mb-5 mr-5 text-md text-blue-300"> Black Bears are found in forests all across North America from Canada to Mexico. Black Bears can also be found in the more mountainous regions of the continent</text>
                    <text className="ml-5 text-lg text-blue-500">Diet:</text>
                    <text className="ml-10 mb-5 mr-5 text-md text-blue-300">Black Bears are omnivores and will eat many things they find in the wild. The most common foods are: plants, berries, insects, fish, smaller mammals, and birds</text>
                    <text className="ml-5 text-lg text-blue-500">Conservation Status:</text>
                    <text className="ml-10 mb-5 text-md text-green-500">Least Concern</text>
                    
                </div>

                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <text className="text-3xl text-blue-500">Find Black Bears at the Calgary Zoo</text>
                    <text className="text-blue-300">Put a map or something showing where the Black Bears exhibit is located</text>
                </div>
            </div>
            
        </div>
        
        
    )
}
