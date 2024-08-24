import RetroGrid from "@/components/magicui/retro-grid";
import gsap from "gsap";
import {
  ArrowDown,
  ArrowDown01,
  ArrowDownIcon,
  ChevronDown,
  ChevronUp,
  MoveDown,
  MoveDownLeft,
  SquareArrowDownIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function MobLinks({ children, href }) {
  return (
    <Link
      className="p-2 rounded hover:bg-zinc-50 transition-all easeInOut duration-300 hover:text-zinc-800 font-semibold text-zinc-400"
      href={href}
    >
      {children}
    </Link>
  );
}

export default MobLinks;

export const DropDownMobNav = ({ droplinks, title }) => {
  const [isDrop, setIsDrop] = React.useState(false);
  const dropAnime = () => {
    if (isDrop) {
      gsap.to("#serviceDrop", {
        height: "140px",
        ease: "circ",
      });
    } else {
      gsap.to("#serviceDrop", {
        height: "0",
        ease: "circ",
      });
    }
  };
  return (
    <div className="flex flex-col text-zinc-300 overflow-hidden h-fit">
      <div
        onClick={() => {
          setIsDrop(!isDrop);
          dropAnime();
        }}
        className="p-2 rounded flex justify-between items-center hover:bg-zinc-50 transition-all easeInOut duration-300 hover:text-zinc-800 font-semibold text-zinc-400 select-none cursor-pointer"
      >
        <h1 className="">{title}</h1>
        {!isDrop ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div id="serviceDrop" className="sticky w-full overflow-hidden">
        {droplinks.map((data) => (
          <Link
            key={data.title}
            className="block p-1 px-2 hover:text-zinc-400 ease transition-all duration-400"
            href={data.href}
          >
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
