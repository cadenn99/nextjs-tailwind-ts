import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <section className="w-full h-[500px] flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl font-bold">Where startups grow</h1>
      <h2 className="text-xl text-gray-500 mt-2">
        Get started by joining the growth newsletter
      </h2>
      <div className="border-2 border-gray-300 p-3 max-w-md w-full flex mt-10 rounded">
        <input
          type="text"
          placeholder="Enter your email "
          className="w-full outline-none"
        />
        <button className="bg-blue-600 text-white px-8 py-2 whitespace-nowrap rounded">
          Join free
        </button>
      </div>
      <h3 className="text-gray-500 font-semibold mt-10">Trusted by </h3>
      <div className="flex justify-between max-w-xs w-full mt-5">
        {["msft", "aapl", "tsla"].map((item) => (
          <div className="relative h-10 w-10">
            <Image
              src={`/${item}.png`}
              key={item}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Banner;
