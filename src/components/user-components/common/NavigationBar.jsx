import Link from "next/link";
import React from "react";

function NavigationBar() {
  return (
    <nav className="fixed z-[20] top-0 left-0 border-b w-screen px-[4rem] py-[1rem] flex items-center justify-between">
      <Link href={"/"} title="Ulnlabs" className="text-zinc-400 font-black" >
        UlnLabs
      </Link>
      <div className="">
        
      </div>
    </nav>
  );
}

export default NavigationBar;
