"use client";
import Image from "next/image";
import React, { useState } from "react";

const ourWorks = ["training", "web", "mobile", "design", "branding", "seo"];

function page() {
  const [selectedWork, setSelectedWork] = useState<string>("training");
  return (
    <div className="mt-[4rem] min-h-screen">
      <div className="flex items-center justify-between gap-6 max-w-6xl border-b">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-gray-800">
            Gallary of Our <br />
            works
          </h1>
          <p>
            We are a dynamic startup focused on delivering innovative solutions
            to our clients. Our team is dedicated to pushing the boundaries of
            technology and creativity to achieve outstanding results.
          </p>
        </div>
        <div className="max-h-fit max-w-full">
          <Image
            src={"/images/ourwork.svg"}
            alt="Our Works"
            width={500}
            height={500}
            className="object-cover aspect-square"
          />
        </div>
      </div>
      <div className="">
        <div className="flex flex-wrap justify-center">
          {ourWorks.map((work, index) => (
            <button
              onClick={() => setSelectedWork(work)}
              className={`px-6 py-2 border-b ${
                work == selectedWork && "border-b-primary border-b-2"
              }`}
            >
              {work}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
