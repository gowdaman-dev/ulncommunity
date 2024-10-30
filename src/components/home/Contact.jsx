"use client";
import Image from "next/image";
import React from "react";

function Contact() {
  const [contactType, setContactType] = React.useState("sayhi");
  return (
    <div className="md:py-8 py-4 w-full flex flex-col justify-start items-center">
      <div className="flex md:flex-row flex-col w-full justify-start gap-8 p-4 py-8">
        <h3 className="bg-primary text-ulndark w-fit font-black text-2xl p-2 rounded-lg h-fit">
          Contact
        </h3>
        <p className="md:w-2/3 text-justify">
          If you have any questions, feel free to reach out to us. We are always
          happy to help you.
        </p>
      </div>
      <div className="bg-ulngray rounded-3xl p-8 w-full">
        <form action="" method="post" className="flex flex-col gap-4">
          <div className="flex gap-6">
            <div className="flex items-center">
              <input
                type="radio"
                name="contacttype"
                className="hidden"
                id="sayhi"
                value="sayhi"
                checked={contactType === "sayhi"}
                onChange={() => setContactType("sayhi")}
              />
              <label
                htmlFor="sayhi"
                className={`cursor-pointer px-4 py-2 rounded-full ${
                  contactType === "sayhi"
                    ? "bg-primary text-ulndark"
                    : "bg-white text-ulndark"
                }`}
              >
                Say Hi
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="contacttype"
                className="hidden"
                id="getaquote"
                value="getaquote"
                checked={contactType === "getaquote"}
                onChange={() => setContactType("getaquote")}
              />
              <label
                htmlFor="getaquote"
                className={`cursor-pointer px-4 py-2 rounded-full ${
                  contactType === "getaquote"
                    ? "bg-primary text-ulndark"
                    : "bg-white text-ulndark"
                }`}
              >
                Get a Quote
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-fit">
              <div className="flex flex-col gap-4 h-fit">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label htmlFor="name" className="text-ulndark">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full p-2 rounded-lg border border-ulndark font-semibold bg-white"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="text-ulndark">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full p-2 rounded-lg border border-ulndark font-semibold bg-white"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="message" className="text-ulndark">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full p-2 rounded-lg border border-ulndark font-semibold bg-white"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="bg-ulndark text-white w-full p-2 rounded-lg border border-ulndark font-semibold"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:flex hidden items-center justify-end">
              <Image src={"/images/contact.png"} alt="contactimg" width={400} height={400} className="h-[300px]" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
