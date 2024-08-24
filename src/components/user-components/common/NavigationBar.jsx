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
import MobLinks, { DropDownMobNav } from "./MobLinks";
import { Github } from "lucide-react";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

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
      <MobList isMenu={isMenu} />
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-n8ne transition-alls hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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

export function MobList({ isMenu }) {
  return (
    <motion.div
      initial={{
        x: "100%",
      }}
      animate={
        !isMenu
          ? {
              x: "100%",
            }
          : {
              x: "0%",
            }
      }
      transition={{
        duration: 1,
        ease: "anticipate",
      }}
      className="fixed top-[2.8rem] left-0 min-h-[400px] translate-x-[100%] w-screen flex justify-center"
    >
      <motion.div className="py-[2rem] px-2 bg-white border rounded flex flex-col w-[90%] h-fit">
        <MobLinks href={"/"}>Home</MobLinks>
        <MobLinks href={"/services"}>About Us</MobLinks>
        <DropDownMobNav droplinks={services} title={"Services"} />
        <MobLinks href={"/services"}>Projects</MobLinks>
        <MobLinks href={"/services"}>Blog</MobLinks>
        <MobLinks href={"/services"}>Contact Us</MobLinks>
        <div className="flex flex-col w-full p-2">
          <div className="flex text-center items-center justify-center text-sm font-light">
            <div className="h-[1px] w-full bg-zinc-200" />
            <h1 className="whitespace-nowrap px-2 text-zinc-300 font-thin">
              Social Media
            </h1>
            <div className="h-[1px] w-full bg-zinc-200" />
          </div>
          <div className="flex items-center justify-center px-2 gap-4 pt-4 text-zinc-200">
            <Link href={""}>
              <GitHubLogoIcon
                height={28}
                width={28}
                className="hover:text-zinc-400 ease duration-800 transition-all"
              />
            </Link>
            <Link href={""}>
              <InstagramLogoIcon
                height={28}
                width={28}
                className="hover:text-zinc-400 ease duration-800 transition-all"
              />
            </Link>
            <Link href={""}>
              <LinkedInLogoIcon
                height={28}
                width={28}
                className="hover:text-zinc-400 ease duration-800 transition-all"
              />
            </Link>
            <Link href={""}>
              <TwitterLogoIcon
                height={28}
                width={28}
                className="hover:text-zinc-400 ease duration-800 transition-all"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
