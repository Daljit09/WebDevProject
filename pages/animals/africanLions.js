import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Navbar from "../../components/navbar";

const lionImage = "/africanLion.jpg";


export default function AfricanLion() {



    return (
        <div>
            <Navbar />
            
            <div className="flex space-x-100 m-10">
                <text className="text-7xl text-blue-500 ml-100 mt-20">African Lion</text>
                <Image 
                    src={lionImage} 
                    alt="African Lion image"
                    height={500}
                    width={500}>
                </Image>
            </div>

            <div className="flex mx-40">
                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <text className="m-5 text-3xl text-blue-500">More About African Lions</text>
                    <text className="ml-5 mb-5 text-md text-blue-300">The African Lion is a large cat at the top of the African food chain. They are extremely strong, fast, and intimidating as they can reach speeds of 80km/h and roar at a volume of up to 114 decibles</text>
                    <text className="ml-5 text-lg text-blue-500">Natural Habitat:</text>
                    <text className="ml-10 mb-5 mr-5 text-md text-blue-300"> African Lions are found in sub-saharan Africa. They used to be found all across the continent, nowadays however, 80% of them are found in Eastern or Southern Africa</text>
                    <text className="ml-5 text-lg text-blue-500">Diet:</text>
                    <text className="ml-10 mb-5 mr-5 text-md text-blue-300">African Lions are carnivores and require lots of food to maintain their energy levels. They primarily hunt larger animals, weighing roughly between 100 and 1000 pounds. They will also hunt smaller rodents when they find themselves with a lack of food</text>
                    <text className="ml-5 text-lg text-blue-500">Conservation Status:</text>
                    <text className="ml-10 mb-5 text-md text-yellow-300">Vulnerable</text>
                    
                </div>

                <div className="flex flex-col w-200 h-115 border-2 border-white m-10">
                    <text className="text-3xl text-blue-500">Find African Lions at the Calgary Zoo</text>
                    <text className="text-blue-300">Put a map or something showing where the African Lion exhibit is located</text>
                </div>
            </div>
            
        </div>
        
        
    )
}
