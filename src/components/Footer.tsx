"use client";

import { socialLinks } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
            <p className="text-gray-300 mb-4">
              We create premium branding solutions for businesses and individuals that want to
              stand out. Quality materials, innovative designs, and sustainable
              practices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primaryRed transition-colors"
              >
                {/* Facebook icon */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primaryRed transition-colors"
              >
                {/* Instagram icon */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primaryRed transition-colors"
              >
                {/* Twitter icon */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primaryRed transition-colors"
              >
                {/* WhatsApp icon */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M16.001 2.667c-7.346 0-13.333 5.987-13.333 13.333 0 2.354.619 4.653 1.789 6.685l-1.897 5.62 5.805-1.859a13.224 13.224 0 006.636 1.788h.001c7.346 0 13.333-5.987 13.333-13.334S23.347 2.667 16.001 2.667zm7.373 18.899c-.313.879-1.822 1.626-2.499 1.738-.64.104-1.446.149-2.329-.146-.537-.175-1.228-.398-2.12-.777-3.732-1.616-6.17-5.389-6.354-5.646-.183-.258-1.52-2.02-1.52-3.852 0-1.831.96-2.732 1.297-3.112.337-.379.733-.474.976-.474.244 0 .488.002.699.013.226.011.527-.085.825.63.313.742 1.063 2.568 1.157 2.755.096.184.16.398.03.641-.128.243-.192.394-.377.602-.184.208-.387.464-.552.623-.184.175-.377.364-.162.716.213.352.946 1.563 2.028 2.532 1.394 1.253 2.567 1.639 2.919 1.823.352.184.555.16.76-.096.205-.258.869-1.012 1.1-1.356.231-.344.466-.286.781-.17.313.115 1.974.93 2.312 1.097.337.167.56.248.641.387.08.139.08.81-.232 1.689z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products"
                  className="text-gray-300 hover:text-primaryRed transition-colors"
                >
                  T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-300 hover:text-primaryRed transition-colors"
                >
                  Hoodies
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-300 hover:text-primaryRed transition-colors"
                >
                  Bags & Totes
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-300 hover:text-primaryRed transition-colors"
                >
                  Caps & Headwear
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-300 hover:text-primaryRed transition-colors"
                >
                  Custom Apparel
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-primaryRed transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="text-gray-300 hover:text-primaryRed transition-colors"
                >
                  FAQs
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primaryRed transition-colors"
                >
                  Shipping & Returns
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primaryRed transition-colors"
                >
                  Size Guide
                </a>
              </li> */}
              {/* <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primaryRed transition-colors"
                >
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT</h3>
            <address className="not-italic text-gray-300">
              <p>12 Branded Heart Place</p>
              <p>FUTA South Gate, Akure, Ondo State, Nigeria.</p>
              <p className="mt-4">brandedheart13@gmail.com</p>
              <p>+234 706 193 4336</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-300 text-center">
            © {new Date().getFullYear()} BRANDCO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
