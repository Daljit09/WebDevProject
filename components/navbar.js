import React from 'react';
import Link from 'next/link';

export default function Navbar() {



    return(
        <div className="flex flex-row w-full h-30 bg-blue-500">
            <Link href="/">
                <button className="border-1 border-gray-600 bg-green-500 w-30 mt-11 ml-10">Back</button>
            </Link>

            <text className="text-7xl ml-135 mt-7 text-orange-600">Calgary Zoo DB</text>
        </div>
    )
}