import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="w-screen py-4 bg-white flex items-center justify-center">
      <div className="flex w-[90%] items-center justify-between">
        <div className="flex items-center space-x-2 justify-center">
          <Image src={"/logo.svg"} width={30} height={30} />
          <p
          className="font-black text-lg"
          >Uln
          <span
          className="text-lime-400"
          >
          community
          </span>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
