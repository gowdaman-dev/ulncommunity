"use client";
import {
  ChevronDown,
  ChevronUp,
  LocateIcon,
  MailIcon,
  PinIcon,
  Sparkle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";

type Props = {};

type State = {};

class Navbar extends Component<Props, State> {
  state = {};
  render() {
    return (
      <nav className="flex min-w-screen max-w-full flex-col">
        <div className="flex items-center bg-orange-100 w-screen px-4 sm:px-8 py-2">
          <p className="text-orange-600 text-xs font-light">
            Explore on the world's best & largest Web marketplace{" "}
          </p>
          <div className="ml-auto">
            <Link
              href="mailto:ulnlabs@gmail.com"
              className="text-orange-600 text-xs font-light flex items-center gap-1"
            >
              <MailIcon className="h-4  w-4" />
              <span className="text-orange-600 hover:underline">
                ulnlabs@gmail.com
              </span>
            </Link>
          </div>
          <p className="px-2 flex items-center text-orange-600 text-xs font-light">
            <LocateIcon className="h-4  w-4" />
            IN
          </p>
        </div>
        <div className="flex items-center gap-2 justify-between w-full py-2 bg-white border-b border-orange-50 px-4 sm:px-8 py-2">
          <Link href="/">
            <Image
              id="logo"
              src="/logo/logo.svg"
              width={100}
              height={100}
              alt="logo"
              className="w-15 logo"
            />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/explore"
              className="text-orange-600 text-xs font-light flex items-center gap-1 hover:text-orange-800 hover:underline"
            >
              Features
            </Link>
            <div className="flex items-center group relative">
              <button className="text-orange-600 text-xs font-light flex items-center gap-1 hover:text-orange-800 hover:underline">
                <span>Product</span>
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition duration-300 ease-in" />
              </button>
              <div className="min-w-48 group-hover:block hidden absolute z-10 top-full py-4">
                <div className="flex flex-col px-4 border-b py-2 border-orange-200 bg-white rounded shadow">
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/explore"
                      className="text-orange-600 text-xs font-light flex items-center gap-1 hover:bg-orange-50 hover:text-orange-600 whitespace-nowrap transition duration-300 ease-in px-4 py-2 rounded"
                    >
                      <Sparkle className="min-h-3 min-w-3 max-w-3  max-h-3" />
                      <span>Profolio</span>
                    </Link>
                    <Link
                      href="/explore"
                      className="text-orange-600 text-xs font-light flex items-center gap-1 hover:bg-orange-50 hover:text-orange-600 whitespace-nowrap transition duration-300 ease-in px-4 py-2 rounded"
                    >
                      <Sparkle className="min-h-3 min-w-3 max-w-3  max-h-3" />
                      <span>E-commerce Platforms</span>
                    </Link>
                    <Link
                      href="/explore"
                      className="text-orange-600 text-xs font-light flex items-center gap-1 hover:bg-orange-50 hover:text-orange-600 whitespace-nowrap transition duration-300 ease-in px-4 py-2 rounded"
                    >
                      <Sparkle className="min-h-3 min-w-3 max-w-3  max-h-3" />
                      <span>Marketing & Promotional</span>
                    </Link>
                    <Link
                      href="/explore"
                      className="text-orange-600 text-xs font-light flex items-center gap-1 hover:bg-orange-50 hover:text-orange-600 whitespace-nowrap transition duration-300 ease-in px-4 py-2 rounded"
                    >
                      <Sparkle className="min-h-3 min-w-3 max-w-3  max-h-3" />
                      <span>SaaS Products</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/explore"
              className="text-orange-600 text-xs font-light flex items-center gap-1 hover:text-orange-800 hover:underline"
            >
              Pricing
            </Link>
            <Link
              href="/explore"
              className="text-orange-600 text-xs font-light flex items-center gap-1 hover:text-orange-800 hover:underline"
            >
              Services
            </Link>
            <Link
              href="/explore"
              className="text-orange-600 text-xs font-light flex items-center gap-1 hover:text-orange-800 hover:underline"
            >
              Contacts
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/explore"
              className="text-orange-600 text-xs font-light flex items-center gap-1 px-3 py-2 rounded-md hover:bg-orange-200"
            >
              Login
            </Link>
            <Link
              href="/explore"
              className="text-orange-600 text-xs font-light flex items-center gap-1 px-3 py-2 rounded-md hover:bg-orange-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
