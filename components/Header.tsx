import React from "react";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
function Header() {
  return (
    <header className="h-24 grid grid-cols-2 md:grid-cols-3 px-8 py-4 items-center shadow-md sticky top-0 bg-white z-50">
      <div className="relative w-full h-12">
        <Image
          src="/logo.png"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>
      <ul className="hidden md:inline-flex justify-center gap-5 items-center lg:gap-20">
        <li className="navLink">Companies</li>
        <li className="navLink">Individuals</li>
        <li className="navLink">Community</li>
      </ul>
      <div className="hidden md:inline-flex justify-end gap-5 items-center">
        <p className="navLink">Login</p>
        <button className="bg-blue-600 px-3 py-3 text-white hover:bg-blue-500 rounded">
          Talk with us
        </button>
      </div>

      <div className="flex items-center justify-end md:hidden">
        <Bars3Icon className="w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
