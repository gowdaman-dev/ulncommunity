import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className="sticky w-full rounded-t-3xl bg-ulndark text-white">
      <div className="w-full p-8 flex flex-col items-center gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image src="/logolite.svg" width={20} height={20} alt="logo" />
            <p>ulncommunity</p>
          </Link>
          <div className="w-fit text-sm underline mt-4 md:mt-0">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link href="/about" className="cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="cursor-pointer">
                Contact
              </Link>
              <Link href="/terms" className="cursor-pointer">
                Terms
              </Link>
              <Link href="/privacy" className="cursor-pointer">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between justify-center py-6 border-b">
          <div className="w-full flex flex-col gap-2 max-md:items-center">
            <h6 className="text-sm text-ulndark bg-primary px-1 rounded-lg w-fit">
              Contact us :
            </h6>
            <div className="flex flex-col items-start text-sm font-light gap-4 w-full">
              <div className="flex items-center justify-center w-full">
                <p>Email:</p>
                <Link
                  href="mailto:ulnlabs@gmail.com"
                  className="cursor-pointer"
                >
                  ulnlabs@gmail.com
                </Link>
              </div>
              <div className="flex items-center justify-center w-full">
                <p>Phone:</p>
                <Link href="+919384126303" className="cursor-pointer">
                  +91 93841-26303
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0">
            <div className="bg-zinc-300/[.4] p-2 rounded-xl flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Email"
                className="bg-ulndark p-4 rounded-xl"
              />
              <input
                type="button"
                placeholder="Email"
                value={"Subscribe to Newsletter"}
                className="bg-primary text-ulndark font-bold p-4 rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-xs font-light py-2">
          <div className="flex items-center gap-4">
            <p>© 2024 ulncommunity</p>
            <Link href="/terms" className="cursor-pointer">
              Terms
            </Link>
            <Link href="/privacy" className="cursor-pointer">
              Privacy
            </Link>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="" className="cursor-pointer">
              <FaLinkedinIn />
            </Link>
            <Link href="" className="cursor-pointer">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
