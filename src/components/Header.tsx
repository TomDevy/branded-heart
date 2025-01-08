"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import { links } from "@/constants/data";
import Link from "next/link";
import {  HOME } from "@/constants/path";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.svg";
import menu from "@/assets/icons/menu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header
    >
      <Link href={HOME}>
        <Image
          className="cursor-pointer w-36 md:w-auto"
          src={logo}
          alt="vesspor"
        />
      </Link>
        <nav className="hidden lg:flex items-center justify-center gap-10">
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

      <div className="lg:hidden">
        <Image
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer mr-3"
          src={menu}
          alt="menu"
        />
        <div
          className={`rounded transition linear duration-[0.3s] drop-shadow-lg fixed top-30 left-0 bg-white z-20 p-5 w-full ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-6 text-center">
            <div className="">
                <div className="flex flex-col items-center gap-5 justify-center w-full relative">
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
                  <div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
