import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[50px] flex items-center justify-between text-sm">
      <div>©2023 HelloBlog. All rights reserved.</div>
      <div className="flex items-center gap-[10px] ">
        <Image src="/1.png" className="opacity-75 hover:cursor-pointer" width={16} height={16} alt="hello blog"></Image>
        <Image src="/2.png" className="opacity-75 hover:cursor-pointer" width={16} height={16} alt="hello blog"></Image>
        <Image src="/3.png" className="opacity-75 hover:cursor-pointer" width={16} height={16} alt="hello blog"></Image>
        <Image src="/4.png" className="opacity-75 hover:cursor-pointer" width={16} height={16} alt="hello blog"></Image>
      </div>
    </div>
  );
};

export default Footer;
