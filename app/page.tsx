"use client";

import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="grid place-content-center place-items-center h-full w-[80%] mx-auto gap-4 md:grid-cols-12">
        <div className="grid place-self-center w-[100%] place-items-center md:place-items-start md:col-span-6">
          <h1 className="text-2xl w-[100%] text-white font-bold text-center md:text-left md:text-3xl lg:text-4xl">
            Hi, My name is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Sharonrose Oladokun
            </span>
          </h1>
          <p className="text-gray-200 text-sm w-[100%] md:text-lg text-center md:text-left">
            A passionate law student with a deep-rooted interest in technology,
            I am dedicated to exploring the intersection of law and innovation.
          </p>
        </div>
        <div className="w-[150px] h-[150px] md:bg-gradient-to-r md:from-purple-300 md:to-red-300 rounded-full md:w-[200px] md:h-[200px] md:flex md:items-center md:justify-center lg:w-[300px] lg:h-[300px] md:col-span-6">
          <Image src="/dp.png" alt="profile picture" width={200} height={200} />
        </div>
      </div>
      <Skills />
    </main>
  );
}
