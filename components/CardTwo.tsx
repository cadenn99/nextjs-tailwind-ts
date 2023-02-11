import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
interface Props {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
}

function CardTwo({ icon, title, subTitle }: Props) {
  return (
    <div className="border-2 p-4 bg-gray-200 border-gray-300 cursor-pointer hover:scale-105 ease-in-out duration-200 rounded">
      <div className="h-8 w-8 text-gray-500">{icon}</div>
      <h2 className="text-2xl mt-5">{title}</h2>
      <h3 className="text-gray-500 mb-5">{subTitle}</h3>
      <ArrowRightIcon className="h-8 w-8 text-gray-500 ml-auto" />
    </div>
  );
}

export default CardTwo;
