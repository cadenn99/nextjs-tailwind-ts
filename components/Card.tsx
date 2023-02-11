import React from "react";
import Image from "next/image";
interface Props {
  logo: string;
  percentage: number;
}
function Card({ logo, percentage }: Props) {
  return (
    <div className="p-4 bg-white flex gap-10 text-gray-500 rounded hover:scale-105 cursor-pointer ease-in-out duration-200">
      <div className="relative h-16 w-16">
        <Image src={`/${logo}.png`} alt="" fill className="object-contain" />
      </div>
      <div className="flex flex-col items-end flex-grow">
        <div className="">Reduced customer acquistion cost and churn by</div>
        <p className=" font-bold text-3xl text-black">{percentage}%</p>
      </div>
    </div>
  );
}

export default Card;
