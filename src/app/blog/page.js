import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="">
      {/* {data.map((item) => ( */}
      <Link
        href={`/blog/testId`}
        className="flex items-center gap-12 mb-12"
        // key={item.id}
      >
        <div className="">
          <Image
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            width={400}
            height={250}
            className="object-cover"
          />
        </div>
        <div className="">
          <h1 className="mb-3">Title</h1>
          <p className="text-lg text-[#999]">Description</p>
        </div>
      </Link>
      <Link
        href={`/blog/testId`}
        className="flex items-center gap-12 mb-12"
        // key={item.id}
      >
        <div className="">
          <Image
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            width={400}
            height={250}
            className="object-cover"
          />
        </div>
        <div className="">
          <h1 className="mb-3">Title</h1>
          <p className="text-lg text-[#999]">Description</p>
        </div>
      </Link>
      <Link
        href={`/blog/testId`}
        className="flex items-center gap-12 mb-12"
        // key={item.id}
      >
        <div className="">
          <Image
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            width={400}
            height={250}
            className="object-cover"
          />
        </div>
        <div className="">
          <h1 className="mb-3">Title</h1>
          <p className="text-lg text-[#999]">Description</p>
        </div>
      </Link>
      {/* ))} */}
    </div>
  );
};

export default Blog;
