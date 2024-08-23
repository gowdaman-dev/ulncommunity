"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { motion } from "framer-motion";
import MobLinks from "./MobLinks";

const services = [
  { title: "Mobile App Development", href: "/services/mobile-app-development" },
  {
    title: "Custom Software Solutions",
    href: "/services/custom-software-solutions",
  },
  { title: "API Development & Integration", href: "/services/api-development" },
  { title: "Database Management", href: "/services/database-management" },
];

export function NavigationBar() {
  const [isMenu, setIsMenu] = React.useState(false);
  return (
    <nav className="flex justify-between items-center md:px-12 px-8 border-none bg-transparent fixed top-0 left-0 w-screen z-[20] py-2">
      <div className="logo">
        <Link href={"/"}>
          <Image src={"/logo.svg"} height={80} width={120} alt="logo" />
        </Link>
      </div>
      <NavigationMenu className="max-md:hidden">
        <NavigationMenuList>
          <NavigationMenuItem className="bg-transparent">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="bg-transparent">
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="bg-transparent">
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {services.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                  >
                    Description not available
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="bg-transparent">
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="bg-transparent">
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="bg-transparent">
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div
        onClick={() => setIsMenu(!isMenu)}
        className="h-[30px] w-[30px] cursor-pointer md:hidden bg-white border rounded flex flex-col overflow-hidden items-center justify-center"
      >
        <motion.div
          animate={
            isMenu
              ? {
                  marginTop: "0px",
                  rotate: "45deg",
                }
              : {
                  marginTop: "8px",
                  rotate: 0,
                }
          }
          className="bar h-[2px] w-[20px] bg-zinc-800 absolute rounded"
        />
        <motion.div
          animate={
            isMenu
              ? {
                  marginTop: "0px",
                  rotate: "-45deg",
                }
              : {
                  marginTop: "-8px",
                  rotate: 0,
                }
          }
          className="bar h-[2px] w-[20px] bg-zinc-800 absolute rounded"
        />
      </div>
      <MobList />
    </nav>
  );
}

export default NavigationBar;
const ListItem = React.forwardRef(function ListItem(
  { className, title, children, href, ...props },
  ref
) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function MobList() {
  return (
    <div className="fixed top-[2.5rem] left-0 h-fit p-[1rem] w-screen">
      <div className="py-[2rem] px-2 bg-white border rounded flex flex-col">
        <MobLinks href={"/"}>Home</MobLinks>
        <MobLinks href={"/services"}>Services</MobLinks>
        <MobLinks href={"/services"}>Projects</MobLinks>
        <MobLinks href={"/services"}>Blog</MobLinks>
        <MobLinks href={"/services"}>Contact Us</MobLinks>
      </div>
    </div>
  );
}