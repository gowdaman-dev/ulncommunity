import React from "react";
import Hero from "@/components/user-components/home/Hero";
import LangPanel from "@/components/user-components/home/LangPanel";
import AboutUs from "@/components/user-components/home/AboutUs";

function HomePage() {
  return (
    <>
      <Hero />
      <LangPanel />
      <AboutUs/>
    </>
  );
}

export default HomePage;
