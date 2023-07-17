import Link from "next/link";
import React from "react";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="p-5 hover:cursor-pointer bg-[#53c28b] border-none rounded-[5px] text-white w-max">
        {text}
      </button>
    </Link>
  );
};

export default Button;
