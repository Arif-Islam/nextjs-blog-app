import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className="">
      <h1 className="text-[#53c28b] text-[30px] font-semibold">
        {params.category}
      </h1>

      {data.map((item) => (
        <div
          className={`flex gap-12 mt-12 mb-24 ${
            item.id === 2 ? "flex-row-reverse" : ""
          }`}
          key={item.id}
        >
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1 className="text-[40px] font-bold">{item.title}</h1>
            <p className="text-lg font-light">{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className="flex-1 h-[500px] relative">
            <Image
              className="object-cover"
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
