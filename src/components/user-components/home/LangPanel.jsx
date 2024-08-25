import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
const reviews = [
  {
    name: "Reactjs",
  },
  {
    name: "Nextjs",
  },
  {
    name: "Mongodb",
  },
  {
    name: "Nodejs",
  },
  {
    name: "Flask",
  },
  {
    name: "FastAPI",
  },
  {
    name: "ElectronJs",
  },
];
function LangPanel() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default LangPanel;

const ReviewCard = ({ name }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl  p-4"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <h1
        className="text-2xl font-bold text-zinc-400"
        >{name}</h1>
      </div>
    </figure>
  );
};
