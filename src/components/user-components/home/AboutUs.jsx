"use client";
import HyperText from "@/components/magicui/hyper-text";
import { cn } from "@/lib/utils";
import { NeatGradient } from "@firecms/neat";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
function AboutUs() {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);
  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        {
          color: "#FFFFFF",
          enabled: true,
        },
        {
          color: "#FFCFCF",
          enabled: true,
        },
        {
          color: "#DAF9FF",
          enabled: true,
        },
        {
          color: "#E0E0E0",
          enabled: true,
        },
        {
          color: "#F6FFFF",
          enabled: true,
        },
      ],
      speed: 2,
      horizontalPressure: 0,
      verticalPressure: 3,
      waveFrequencyX: 2,
      waveFrequencyY: 4,
      waveAmplitude: 3,
      shadows: 6,
      highlights: 7,
      colorBrightness: 1,
      colorSaturation: -7,
      wireframe: true,
      colorBlending: 6,
      backgroundColor: "#FFFFFF",
      backgroundAlpha: 1,
      resolution: 1,
    });

    return gradientRef.current.destroy;
  }, [canvasRef.current]);
  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.from("#abtcard", {
      y: 100,
      scale: 0.8,
      scrollTrigger: {
        trigger: "#atbcontainer",
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);
  return (
    <div
      id="atbcontainer"
      className="w-screen min-h-screen max-md:px-12 px-8 py-24"
    >
      <div
        id="abtcard"
        className="relative w-full min-h-[80vh] p-6 border border-zinc-300 overflow-hidden rounded-lg shadow-lg shadow-zinc-300 shadow-[5px_5px_2px]"
      >
        <canvas
          className={"bg-white"}
          style={{
            isolation: "isolate",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: -1,
            opacity: 0.4,
          }}
          ref={canvasRef}
        />
        <motion.div
          initial={{
            opacity: 0,
            y: "100%",
          }}
          whileInView={{
            opacity: 1,
            y: "0%",
            transition: {
              delay: 1,
              ease: "easeInOut",
              duration: 0.5,
            },
          }}
        >
          <h1
            className={cn(
              `text-6xl font-black opacity-75 animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent`
            )}
          >
            Who We Are ?
          </h1>
        </motion.div>
        <div className="flex justify-center item-center h-full w-full">
          <div className="w-full"></div>
          <p className="w-full text-zinc-400">
            At ULNLabs, we believe in pushing the boundaries of technology. Our
            team of passionate developers, designers, and strategists is
            committed to delivering high-quality web solutions that are both
            innovative and scalable. Founded on the principles of creativity and
            technical excellence, ULNLabs has quickly become a trusted partner
            for businesses looking to thrive in the digital age.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
