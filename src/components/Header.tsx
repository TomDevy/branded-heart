"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { links } from "@/constants/data";
import Link from "next/link";
import { HOME } from "@/constants/path";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png"; 
import menu from "@/assets/icons/menu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white bg-opacity-90 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href={HOME} className="relative z-20">
            <Image
              className="w-12 md:w-auto h-auto"
              width={60}
              height={60}
              src={logo}
              alt="branded heart"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {links.map(({ route, label }) => (
              <Link 
                key={label}
                href={route}
                className={`font-medium text-sm tracking-wide hover:text-gray-600 transition-colors ${
                  isActive(route) ? "text-primaryRed font-bold" : "text-gray-500"
                }`}
              >
                {label.toUpperCase()}
              </Link>
            ))}
            <Link 
              href="/cart" 
              className="ml-4 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 relative z-20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <Image
                className="w-8 h-8"
                src={menu}
                alt="menu"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-col space-y-6">
            {links.map(({ route, label }) => (
              <Link 
                key={label}
                href={route}
                className={`text-lg font-medium py-2 ${
                  isActive(route) ? "text-black font-bold" : "text-gray-500"
                }`}
              >
                {label.toUpperCase()}
              </Link>
            ))}
            <Link 
              href="/cart" 
              className="flex items-center space-x-2 py-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              <span>CART</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;