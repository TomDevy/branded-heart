"use client";
import { ButtonProps } from "@/utils/types";
import React from "react";

const Button = ({
  children,
  className,
  onClick,
  isDisabled,
  isSecondary = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`text-primaryRed font-bold border-2 border-[#232555] text-sm rounded-full px-8 py-2 md:py-3 bg-[#232555] transition-all ease-linear duration-300 cursor-pointer md:hover:scale-105 ${
        isSecondary ? "!text-[#232555] bg-white border-white" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
