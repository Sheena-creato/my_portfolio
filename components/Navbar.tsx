import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <Link href="/">
          <h1 className="text-white text-[25px] font-semibold">
            A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              S
            </span>
          </h1>
        </Link>
      </div>

      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-300 transition duration-300"
            >
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
