import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center min-h-screen w-full">
        <div className="flex flex-col gap-4 w-full">
          <p className="bg-gradient-to-r to-primary from-ulndark text-white font-light px-2 py-1 rounded-md w-fit">
            About Us
          </p>
          <h1 className="md:text-6xl text-4xl font-black md:leading-[6rem] leading-[4rem]">
            <span className=" bg-primary text-ulndark  px-2 py-1 rounded-md w-fit">
              Unified
            </span>{" "}
            Logics <br /> and{" "}
            <span className=" bg-primary text-ulndark  px-2 py-1 rounded-md w-fit">
              Nexus
            </span>
          </h1>
          <p className="md:text-xl font-light">
            ULNCommunity is a full-stack web development agency focused on
            creating dynamic, user-centered web solutions. Our passionate team
            of developers and designers turns complex ideas into interactive,
            seamless digital experiences
          </p>
        </div>
        <div className="flex items-center md:justify-end justify-center w-full">
          <Image
            src="/assets/about/aboutus.svg"
            width={500}
            height={500}
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
