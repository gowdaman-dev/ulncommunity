"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import PopupNav from "./PopupNav";
import { AnimatePresence } from "framer-motion";

export interface NavLinks {
  title: string;
  path: string;
}

const navLinks: NavLinks[] = [
  {
    title: "About Us",
    path: "/aboutus",
  },
  {
    title: "Services",
    path: "/#services",
  },
  {
    title: "Works",
    path: "/ourworks",
  },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <nav className="fixed flex justify-between items-center h-16 bg-white/[.5] backdrop-blur-2xl text-black w-full z-50 top-0 left-0 px-10">
        <div className=" text-black flex justify-between items-center w-full">
          <div className="logo">
            <Link href="/" onClick={()=>setShowMenu(false)}>
              <Image src="/logo.svg" alt="logo" width={200} height={100} />
            </Link>
          </div>
          <div className="md:flex hidden">
            <ul className="flex justify-between items-center gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/contact" className="contact">
            <button className="hover:bg-black md:flex hidden text-black hover:text-white border border-black transition-colors ease-linear duration-200 px-4 py-2 rounded-md">
              Request a quote
            </button>
          </Link>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className={`bar md:hidden cursor-pointer ${
              showMenu ? "rotate-180" : "rotate-0"
            } transition-all ease-in-out duration-300`}
          >
            {showMenu ? <FaX /> : <FaBars />}
          </div>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {showMenu && <PopupNav navLinks={navLinks} hidemenu={setShowMenu} />}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
