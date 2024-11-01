import Image from "next/image";
import React from "react";

function ChooseUs() {
  return (
    <div className="flex flex-col gap-4 py-4 w-full items-center">
      <h1 className="p-2 bg-primary text-ulndark rounded-md w-fit text-2xl font-black">
        Why Choose Us?
      </h1>
      <div className="flex flex-col gap-4 w-full py-4">
        <div className="flex flex-row-reverse justify-between items-start rounded-3xl border border-black border-b-4 p-8 gap-4">
          <div className="w-full flex items-center justify-end">
            <div className="md:w-[80%] w-full *:">
              <h1 className="text-xl font-bold">User-Centric Approach</h1>
              <p>
                We understand that the success of any web solution depends on
                the experience it provides to users. We prioritize intuitive
                design and functionality at every step.
              </p>
            </div>
          </div>
          <div className="w-full max-md:hidden">
            <Image
              src="/assets/about/1.svg"
              width={300}
              height={300}
              alt="Choose Us"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-start rounded-3xl border border-black border-b-4 p-8 gap-4">
          <div className="w-full flex items-center justify-end">
            <div className="md:w-[80%] w-full *:">
              <h1 className="text-xl font-bold">User-Centric Approach</h1>
              <p>
                We understand that the success of any web solution depends on
                the experience it provides to users. We prioritize intuitive
                design and functionality at every step.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-end  max-md:hidden">
            <Image
              src="/assets/about/2.svg"
              width={300}
              height={300}
              alt="Choose Us"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between items-start rounded-3xl border border-black border-b-4 p-8 gap-4">
          <div className="w-full flex items-center justify-end">
            <div className="md:w-[80%] w-full *:">
              <h1 className="text-xl font-bold">User-Centric Approach</h1>
              <p>
                We understand that the success of any web solution depends on
                the experience it provides to users. We prioritize intuitive
                design and functionality at every step.
              </p>
            </div>
          </div>
          <div className="w-full  max-md:hidden">
            <Image
              src="/assets/about/3.svg"
              width={300}
              height={300}
              alt="Choose Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
