"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function PopupNav({
  navLinks,
  hidemenu,
}: {
  navLinks: any[];
  hidemenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.div className="fixed top-[5rem] left-0 w-full h-fit flex justify-center items-center z-50">
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.2 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -100, opacity: 0, scale: 0.2 }}
        className="bg-ulngray flex gap-2 flex-col sm:w-[400px] justify-between items-center p-8 rounded-lg shadow-md relative z-50"
      >
        <div className="flex justify-end w-full"></div>
        <ul className="flex flex-col justify-between items-center gap-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                onClick={() => hidemenu(false)}
                className="hover:text-zinc-600 transition-all ease-linear duration-200"
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact">
          <button
            onClick={() => hidemenu(false)}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-ulndark hover:text-primary transition-colors ease-linear duration-200"
          >
            Request a quote
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default PopupNav;
