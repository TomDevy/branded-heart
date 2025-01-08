import React from "react";

export type ButtonProps = {
  onClick?: () => void;
  children: string | React.ReactNode;
  className?: string;
  type?: "button" | "reset" | "submit";
  isSecondary?: boolean;
  isDisabled?: boolean;
};

export type InputFieldPropType = {
  label: string;
  type?: string;
  placeholder?: string;
  onChange: (e?: any) => void;
  value: string;
  isPassword?: boolean;
  isDisabled?: boolean;
};
