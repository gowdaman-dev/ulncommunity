import ChooseUs from "@/components/about/ChooseUs";
import Hero from "@/components/about/Hero";
import Journey from "@/components/about/Journey";
import Mission from "@/components/about/Mission";
import WhatWeDo from "@/components/about/WhatWeDo";
import React from "react";
function page() {
  return (
    <div className="md:min-h-screen h-fit flex flex-col items-start gap-4">
      <Hero />
      <Mission />
      <WhatWeDo />
      <ChooseUs />
      <Journey />
    </div>
  );
}

export default page;
