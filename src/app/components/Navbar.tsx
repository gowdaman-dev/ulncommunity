"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";

type Props = {};

type State = {};

class Navbar extends Component<Props, State> {
  state = {};
  render() {
    return (
      <nav className="bg-white w-screen py-2 container px-4 flex justify-between items-center transition-all duration-500 ease-linear">
        <Link
          href="/"
          className="hover:text-primary transition-colors duration-300 ease-linear"
        >
          <Image
            src="/logo/logo.svg"
            alt="Uln Community Logo"
            width={116}
            height={32}
            className="object-contain"
          />
        </Link>
        <div className="flex gap-4">
          <Link
            href="/features"
            className="hover:text-primary transition-colors duration-300 ease-linear"
          >
            Features
          </Link>
          <div className="relative">
            <button className="group hover:text-primary transition-colors duration-300 ease-linear flex items-center">
              <span className="mr-2">Services</span>
              <ChevronDown className="group-hover:hidden visible" />
              <ChevronUp className="hidden group-hover:visible " />
            </button>
            <div className="hidden group-hover:visible absolute top-[100%] left-0 w-full bg-white shadow-lg">
              <ul className="py-2 text-sm">
                <li>
                  <Link href="/services/service-1" className="block px-4 py-2">
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link href="/services/service-2" className="block px-4 py-2">
                    Service 2
                  </Link>
                </li>
                <li>
                  <Link href="/services/service-3" className="block px-4 py-2">
                    Service 3
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            href="/pricing"
            className="hover:text-primary transition-colors duration-300 ease-linear"
          >
            Pricing
          </Link>
          <Link
            href="/products"
            className="hover:text-primary transition-colors duration-300 ease-linear"
          >
            Products
          </Link>
          <Link
            href="/contacts"
            className="hover:text-primary transition-colors duration-300 ease-linear"
          >
            Contacts
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href="/signup"
            className="hover:text-primary transition-colors duration-300 ease-linear"
          >
            Signup
          </Link>
          <Link
            href="/login"
            className="hover:text-primary transition-colors duration-300 ease-linear"
          >
            Login
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
