import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="bg-[#e1dbf5b0]  sm:flex items-center  justify-center sm:justify-start p-4 sm:pl-16 lg:pl-20 xl:pl-24 h-auto lg:h-[37rem]">
      <div className="w-full sm:w-1/2 lg:w-2/4 px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-0">
        <h2
          className="font-medium text-purple-700 text-center sm:text-left text-4xl sm:text-7xl mb-11
          transition  delay-100  duration-1000 hover:text-[#d89ac9]
        "
        >
          Nuestra esencia de la cerámica
        </h2>
        <p className="text-lg lg:text-xl leading-relaxed">
         Cada pieza, diseñada con originalidad y elaborada a mano en
          nuestro taller, refleja la pasión y la creatividad que inspira nuestra
          artesanía.
        </p>
      </div>
      <div className="w-full sm:w-1/2 lg:w-2/4  flex justify-center sm:justify-end">
        <Image
          src={"/acrobata.png"}
          height={450}
          width={550}
          alt={"asd"}
          className="object-contain drop-shadow-2xl  "
        />
      </div>
    </div>
  );
}
