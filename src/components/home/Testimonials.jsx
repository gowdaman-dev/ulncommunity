"use client";
import React, { useEffect, useRef } from "react";

function Testimonials() {
  // Testimonials component manual slider on click
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carousel = useRef(null);
  useEffect(() => {
    if (carousel.current) {
      carousel.current.scrollTo({
        left: activeIndex * carousel.current.offsetWidth-100,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);
  return (
    <div className="md:py-8 py-4 w-full flex flex-col justify-start items-center">
      <div className="flex md:flex-row flex-col w-full justify-start gap-8 p-4 py-8">
        <h3 className="bg-primary text-ulndark w-fit  font-black text-2xl p-2 rounded-lg h-fit">
          Testimonials
        </h3>
        <p className="md:w-2/3 text-justify">
          Hear what our clients have to say about our services and how we have
          helped them achieve their business goals.
        </p>
      </div>
      <div className="bg-ulndark rounded-3xl p-8 w-full">
        <div
          id="testimonials"
          ref={carousel}
          className="flex snap-mandatory snap-x overflow-x-auto scrollbar-hide gap-8"
        >
          <div className="snap-center max-md:min-w-full min-w-[800px] p-8 border rounded-3xl text-ulngray">
            <p>
              "ULN Community has transformed our business. Their services are
              top-notch and have helped us achieve our goals efficiently."
            </p>
            <p className="mt-4 font-bold">- John Doe, CEO</p>
          </div>
          <div className="snap-center max-md:min-w-full min-w-[800px] p-8 border rounded-3xl text-ulngray">
            <p>
              "The team at ULN Community is fantastic! They provided excellent
              support and guidance throughout our project."
            </p>
            <p className="mt-4 font-bold">- Jane Smith, Project Manager</p>
          </div>
          <div className="snap-center max-md:min-w-full min-w-[800px] p-8 border rounded-3xl text-ulngray">
            <p>
              "We couldn't be happier with the results. ULN Community's
              expertise and dedication are unmatched."
            </p>
            <p className="mt-4 font-bold">- Michael Johnson, CTO</p>
          </div>
          <div className="snap-center max-md:min-w-full min-w-[800px] p-8 border rounded-3xl text-ulngray">
            <p>
              "Highly recommend ULN Community for their exceptional service and
              professionalism."
            </p>
            <p className="mt-4 font-bold">- Emily Davis, Marketing Director</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setActiveIndex(0)}
            className={` ${
              activeIndex === 0 ? "bg-primary" : "bg-ulngray"
            } w-4 h-4 rounded-full mr-2
                    `}
            aria-label="Slide 1"
          ></button>
          <button
            onClick={() => setActiveIndex(1)}
            className={`${
              activeIndex === 1 ? "bg-primary" : "bg-ulngray"
            } w-4 h-4 rounded-full mr-2
                            `}
            aria-label="Slide 2"
          ></button>
          <button
            onClick={() => setActiveIndex(2)}
            className={`${
              activeIndex === 2 ? "bg-primary" : "bg-ulngray"
            } w-4 h-4 rounded-full mr-2
                            `}
            aria-label="Slide 3"
          ></button>
          <button
            onClick={() => setActiveIndex(3)}
            className={` ${
              activeIndex === 3 ? "bg-primary" : "bg-ulngray"
            } w-4 h-4 rounded-full mr-2
                            `}
            aria-label="Slide 4"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
