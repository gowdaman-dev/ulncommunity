import Link from "next/link";
import React from "react";

function WhatWeDo() {
  return (
    <div className="py-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <h1>
          <span className="bg-primary text-ulndark px-2 py-1 rounded-md w-fit text-2xl font-black">
            What
          </span>{" "}
          <span className="bg-ulngray text-ulndark px-2 py-1 rounded-md w-fit text-2xl font-black ">
            We Do
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-4 pt-4">
        <div className="lg:col-span-2 md:col-span-3 col-span-6 bg-ulngray rounded-3xl p-4">
          <h1 className="text-xl font-black">Full-Stack Web Development</h1>
          <p className="text-zinc-600">
            We specialize in creating custom web solutions that are tailored to
            your unique business needs. Our team of developers and designers
            work together to create dynamic, user-centered websites that drive
            results.
          </p>
        </div>
        <div className="lg:col-span-2 md:col-span-3 col-span-6 bg-ulngray rounded-3xl p-4">
          <h1 className="text-xl font-black">Custom Web Solutions</h1>
          <p className="text-zinc-600">
            Every project is unique. We deliver custom solutions that are
            scalable and optimized for performance, with a focus on
            functionality and design that resonates with the end-user.
          </p>
        </div>
        <div className="lg:col-span-2 md:col-span-3 col-span-6 bg-ulngray rounded-3xl p-4">
          <h1 className="text-xl font-black">API & Database Management</h1>
          <p className="text-zinc-600">
            From API integration to database architecture, we ensure the
            seamless connection and management of all elements, enabling secure,
            data-driven experiences.
          </p>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-6 bg-ulngray rounded-3xl p-4">
          <h1 className="text-xl font-black">Consultation and Strategy</h1>
          <p className="text-zinc-600">
            With years of experience, we provide expert guidance on the best
            digital strategies, technologies, and practices for achieving
            sustainable growth.
          </p>
        </div>
        <Link
          href={"/"}
          className="lg:col-span-3 md:col-span-6 col-span-6 bg-ulngray rounded-3xl p-4 flex items-center gap-6"
        >
          <div className="w-full flex items-center justify-center md:text-4xl text-2xl gap-4">
            <div className="flex w-full items-start justify-end">JOIN US</div>
            <div className="h-full w-full rounded-3xl bg-primary text-center text-primary">
              -
            </div>
            <div className="h-full w-full justify-start items-center">NOW!</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WhatWeDo;
