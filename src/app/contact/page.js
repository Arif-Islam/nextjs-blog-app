import React from "react";
import Button from "@/components/button/Button";
import Image from "next/image";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-5xl mb-24 text-center font-bold">
        Let&apos;s Keep in Touch
      </h1>
      <div className="flex gap-24 items-center">
        <div className="flex-1 h-[500px] relative">
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={`${styles.img} object-contain`}
          />
        </div>
        <form className="flex-1 flex flex-col gap-5">
          <input
            type="text"
            placeholder="name"
            className="p-2 bg-transparent outline-none text-[#bbb] border-[3px] border-[#bbb] text-xl font-bold"
          />
          <input
            type="text"
            placeholder="email"
            className="p-2 bg-transparent outline-none text-[#bbb] border-[3px] border-[#bbb] text-xl font-bold"
          />
          <textarea
            className="p-2 bg-transparent outline-none text-[#bbb] border-[3px] border-[#bbb] text-xl font-bold"
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
