import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import RetroGrid from "@/components/magicui/retro-grid";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background gap-8">
      {/* Hero Section */}
      <div className="z-10 flex min-h-fit items-center justify-center">
        <AnimatedGradientText>
          🎉
          <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            It Service Community!
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </div>

      {/* Hero Text & Description */}
      <div className="w-[80%] flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="pointer-events-none z-10 md:w-[80%] w-[400px] whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent">
          Empowering Your Digital Transformation with Cutting-Edge Solutions
        </h1>
        <p className="text-center text-base w-full md:w-[60%] text-zinc-400">
          We specialize in providing tailored digital solutions to help
          businesses thrive in the modern world. Whether it's building robust
          web applications or developing dynamic mobile and desktop solutions,
          we have you covered.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex space-x-4 mt-4">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ffaa40] to-[#9c40ff] text-white font-semibold shadow-lg hover:scale-105 transition transform duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold shadow hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Background Grid */}
      <RetroGrid
        angle={10}
        className="absolute top-0 left-0 w-full h-full shadow-none"
      />
    </div>
  );
}

export default Hero;
