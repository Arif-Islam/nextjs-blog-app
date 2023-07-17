"use client";

import Link from "next/link";
import React, { useState } from "react";

const Portfolio = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  return (
    <div className="">
      <h1 className="my-5 text-3xl font-semibold">Choose a gallery</h1>
      <div className="flex gap-12">
        <Link
          style={{
            background: `url(/illustration.png)`,
            backgroundSize: "cover",
          }}
          href="/portfolio/illustrations"
          className="border-[5px] border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative"
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          <span
            className={`absolute right-[10px] bottom-[10px] text-2xl font-bold ${
              hover1 ? "text-[#53c28b]" : ""
            }`}
          >
            Illustrations
          </span>
        </Link>
        <Link
          style={{
            background: `url(/websites.jpg)`,
            backgroundSize: "cover",
          }}
          href="/portfolio/websites"
          className="border-[5px] border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative"
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          <span
            className={`absolute right-[10px] bottom-[10px] text-2xl font-bold ${
              hover2 ? "text-[#53c28b]" : ""
            }`}
          >
            Websites
          </span>
        </Link>
        <Link
          style={{
            background: `url(/apps.jpg)`,
            backgroundSize: "cover",
          }}
          href="/portfolio/applications"
          className="border-[5px] border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative"
          onMouseEnter={() => setHover3(true)}
          onMouseLeave={() => setHover3(false)}
        >
          <span
            className={`absolute right-[10px] bottom-[10px] text-2xl font-bold ${
              hover3 ? "text-[#53c28b]" : ""
            }`}
          >
            Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
