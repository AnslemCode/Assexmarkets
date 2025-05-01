"use client";
import React from "react";

type CustomButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "primary" | "outlinedDark" | "ghost";
  size?: "sm" | "md" | "lg"; // now includes "md"
};

const Button: React.FC<CustomButtonProps> = ({
  text,
  icon,
  onClick,
  className = "",
  variant = "default",
  size = "sm", // default size
}) => {
  const baseStyles =
    "font-secondary inline-flex justify-center items-center gap-2 font-medium transition duration-200 ease-in-out rounded-full cursor-pointer h-[60px]";

  const variantStyles = {
    primary: "bg-[#0dae94] text-white hover:bg-[#0ca88d]",
    outlinedDark:
      "bg-white text-[#2D3139] border border-[#676d79] hover:border-[#2D3139]",
    ghost:
      "bg-transparent text-[#0dae9f] border border-[#0dae9f] hover:bg-white hover:text-[#0dae9f]",
    default: "bg-white text-[#0dae94] hover:bg-[#e6f7f4]",
  };

  const sizeStyles = {
    sm: "w-[256px] text-base",
    md: "w-[288px] text-base",
    lg: "w-[352px] text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
