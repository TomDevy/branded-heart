"use client";

import { socialLinks } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
    >
      <div className="p-5 lg:p-20 bg-[#F8F8F8] rounded-xl md:rounded-3xl">
        <div className="py-5 border-b flex flex-col lg:flex-row lg:items-end items-start justify-between">
          <h1 className="font-bold lg:w-2/4 lg:leading-[60px] text-2xl lg:text-5xl text-primary">
            This is the home of Branding!
          </h1>
          <div className="mt-5 lg:w-2/5 flex gap-3 lg:gap-10 flex-col lg:flex-row items-center">
            {socialLinks.map(({ label, link }) => (
              <Link
                href={link}
                target="_blank"
                className="hover:text-primary mb-3 cursor-pointer transition-all duration-300 text-secondary"
                key={label}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-0 lg:mt-40 mt-20">
          <div className="md:col-span-2 text-center md:text-left">
            <Image
              className="w-28 md:ml-5 mx-auto"
              src={logo}
              alt="branded heart"
            />
          </div>
          {/* <div>
            <h3 className="text-primary font-bold text-lg mb-5">Invest</h3>
            {footerLinks.invest.map(({ label, route }) => (
              <Link
                key={label}
                className="text-secondary text-sm block hover:text-primary mb-3 transition-all duration-300"
                href={route}
              >
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="text-primary font-bold text-lg mb-5">Learn</h3>
            {footerLinks.learn.map(({ label, route }) => (
              <Link
                key={label}
                className="text-secondary text-sm block hover:text-primary mb-3 transition-all duration-300"
                href={route}
              >
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="text-primary font-bold text-lg mb-5">Product</h3>
            {footerLinks.product.map(({ label, route }) => (
              <Link
                key={label}
                className="text-secondary text-sm block hover:text-primary mb-3 transition-all duration-300"
                href={route}
              >
                {label}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
      <p className="py-7 text-xs text-center text-secondary">
        © All Rights Reserved. {year}, Branded Heart Creation.
      </p>
    </footer>
  );
};

export default Footer;
