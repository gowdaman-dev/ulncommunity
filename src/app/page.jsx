import RetroGrid from "@/components/magicui/retro-grid";
import React from "react";
function page() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none z-10 md:w-[720px] w-[400px] whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent">
        Empowering Your Digital Transformation with Cutting-Edge Solutions
      </span>
      <RetroGrid angle={30} />
    </div>
  );
}
export default page;
