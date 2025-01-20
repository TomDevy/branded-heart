"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import { links } from "@/constants/data";
import Link from "next/link";
import { HOME } from "@/constants/path";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png"; 
import menu from "@/assets/icons/menu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="flex items-center justify-between px-5 py-4">
      <div className="flex items-center w-full">
        <Link href={HOME}>
          <Image
            className="cursor-pointer w-12 md:w-auto"
            width={60}
            height={60}
            src={logo}
            alt="branded heart"
          />
        </Link>
        <div className="lg:hidden ml-auto">
          <Image
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer w-8"
            src={menu}
            alt="menu"
          />
        </div>
      </div>
      
      <nav className="hidden lg:flex items-center gap-10">
        {links.map(({ route, label }) => (
          <Link
            href={route}
            className={`text-sm cursor-pointer font-semibold text-secondary transition linear duration-300 hover:text-primary ${
              isActive(route) ? "!text-blue" : ""
            }`}
            key={label}
          >
            {label}
          </Link>
        ))}
      </nav>

      {isOpen && (
        <div className="lg:hidden fixed top-16 left-0 bg-white z-20 p-5 w-full drop-shadow-lg">
          <div className="flex flex-col gap-6 text-center">
            {links.map(({ route, label }) => (
              <Link
                href={route}
                className={`text-sm cursor-pointer font-semibold text-secondary transition linear duration-300 hover:text-primary ${
                  isActive(route) ? "!text-blue" : ""
                }`}
                key={label}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
