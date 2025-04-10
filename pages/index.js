import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const animals = [
    { name: "Alpacas", href: "/animals/alpacas", image: "/alpaca.jpg" },
    { name: "Bighorn Sheep", href: "/animals/bighornSheep", image: "/bighornSheep.jpg" },
    { name: "African Lions", href: "/animals/africanLions", image: "/africanLion.jpg" },
    { name: "Black Bears", href: "/animals/blackBear", image: "/blackBear.jpg" },
    { name: "Giraffes", href: "/animals/giraffe", image: "/giraffe.jpg" },
    { name: "Moose", href: "/animals/moose", image: "/moose.jpg" },
    { name: "Red Pandas", href: "/animals/redpanda", image: "/redpanda.jpeg" },
    { name: "Meeraket", href: "/animals/Meeraket", image: "/Meeraket.png" },
  ];

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <div className="flex flex-row w-full h-30 mb-10 bg-blue-500">
        <h1 className="text-7xl ml-175 mt-7 text-orange-600">Calgary Zoo DB</h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search for an animal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 border-gray-300 rounded-lg p-2 w-1/2"
        />
      </div>

      <main className="flex flex-col w-full items-center">
        <div className="flex flex-row flex-wrap h-250 w-450 border-2">
          {filteredAnimals.map((animal) => (
            <div
              key={animal.name}
              className="flex w-75 h-75 bg-neutral-900 justify-center items-center m-18"
            >
              <Link href={animal.href}>
                <div className="flex flex-col gap-10 w-75 h-75 items-center justify-center">
                  <text className="text-4xl text-yellow-500 mt-5">{animal.name}</text>
                  <Image
                    src={animal.image}
                    alt={`${animal.name} Image`}
                    height={300}
                    width={300}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
