import Button from "@/components/button/Button";
import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex items-center gap-24 ">
      <div className="flex-1 flex flex-col gap-10">
        <h1
          style={{
            background: "linear-gradient(to bottom, #194c33, #bbb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-[72px] font-bold leading-tight"
        >
          Better design for your digital products.
        </h1>
        <p className="text-[22px] font-light">
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div>
        <Image
          className={`w-full h-[500px] object-contain ${styles.img}`}
          src={Hero}
          alt=""
        ></Image>
      </div>
    </div>
  );
}
