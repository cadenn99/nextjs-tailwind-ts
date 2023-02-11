import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <footer className="bg-[#171717] text-white px-10 ">
      <div className="max-w-4xl mx-auto ">
        <div className="grid grid-cols-2 gap-10 mb-10 md:grid-cols-4">
          <ul className="flex flex-col gap-3">
            <ul className="font-bold">Companies</ul>
            <ul>Startup Growth Program</ul>
            <ul>Bell Curve</ul>
            <ul>Hire growth talen</ul>
          </ul>
          <ul className="flex flex-col gap-3">
            <ul className="font-bold">Companies</ul>
            <ul>Startup Growth Program</ul>
            <ul>Bell Curve</ul>
            <ul>Hire growth talen</ul>
          </ul>
          <ul className="flex flex-col gap-3">
            <ul className="font-bold">Companies</ul>
            <ul>Startup Growth Program</ul>
            <ul>Bell Curve</ul>
            <ul>Hire growth talen</ul>
          </ul>
          <ul className="flex flex-col gap-3">
            <ul className="font-bold">Companies</ul>
            <ul>Startup Growth Program</ul>
            <ul>Bell Curve</ul>
            <ul>Hire growth talen</ul>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Sign up for our newsletter
            </h2>
            <p>Get instant access to our growth materials</p>
          </div>
          <div className="border-2 border-gray-500 flex p-4 rounded flex-col sm:flex-row gap-4">
            <input
              type="text"
              className="bg-transparent flex-grow outline-none"
              placeholder="Enter your business email"
            />
            <button className="bg-white px-8 py-2 text-black rounded cursor-pointer">
              Join now
            </button>
          </div>
        </div>
        <div className="border-b-2 border-gray-700 w-full my-5"></div>
        <div className="flex items-center justify-between pb-5">
          <h2>Copyright 2021 Demand Curve</h2>
          <div className="relative w-10 h-10">
            <Image src="/logo.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
