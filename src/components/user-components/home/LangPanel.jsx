import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
const reviews = [
  {
    name: "Reactjs",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Nextjs",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Mongodb",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Nodejs",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Flask",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "FastAPI",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "ElectronJs",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "React Expo",
    img: "https://avatar.vercel.sh/james",
  },
];
function LangPanel() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default LangPanel;

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl  p-4"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white text-4xl font-black text-zinc-400">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
    </figure>
  );
};
