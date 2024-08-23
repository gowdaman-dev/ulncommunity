import RetroGrid from "@/components/magicui/retro-grid";
import Link from "next/link";
import React from "react";

function MobLinks({ children, href }) {
  return (
    <Link
      className="p-2 rounded hover:bg-zinc-50 transition-all easeInOut duration-300 hover:text-zinc-800 font-semibold text-zinc-400 "
      href={href}
    >
      {children}
    </Link>
  );
}

export default MobLinks;

const DropDownMobNav = () => {
  return;
};
