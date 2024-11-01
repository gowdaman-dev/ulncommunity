import Link from "next/link";
import React from "react";

function Journey() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
      <h1 className="text-2xl font-bold">Join Us on Your Digital Journey</h1>
      <p className="md:w-2/3 sm:w-3/4">
        Whether you’re a startup looking to launch an MVP, an established
        business seeking to modernize, or an individual with a groundbreaking
        idea, ULNCommunity is here to make it a reality. Together, we’ll build
        digital experiences that stand out and make a lasting impact.
      </p>
      <p className="font-bold md:w-2/3 sm:w-3/4">
        Let’s create something incredible. Contact us today to discuss your next
        project!
      </p>
      <Link href={"/"} className="bg-ulndark rounded-3xl p-2 px-8 text-primary">
        Join Us Now!
      </Link>
    </div>
  );
}

export default Journey;
