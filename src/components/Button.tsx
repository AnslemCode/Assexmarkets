"use client";
import React from "react";

type CustomButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "primary" | "outlinedDark" | "ghost";
  size?: "sm" | "lg"; // added size prop
};

const Button: React.FC<CustomButtonProps> = ({
  text,
  icon,
  onClick,
  className = "",
  variant = "default",
  size = "sm", // default size is sm
}) => {
  const baseStyles =
    "font-secondary inline-flex justify-center items-center gap-2 font-medium transition duration-200 ease-in-out rounded-full cursor-pointer";

  const variantStyles = {
    primary: "bg-[#0dae94] text-white hover:bg-[#0ca88d]",
    outlinedDark:
      "bg-white text-[#2D3139] border border-[#676d79] hover:border-[#2D3139]",
    ghost:
      "bg-transparent text-[#0dae9f] border border-[#0dae9f] hover:bg-white hover:text-[#0dae9f]",
    default: "bg-white text-[#0dae94] hover:bg-[#e6f7f4]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 w-fit text-base",
    lg: "px-8 py-5 w-fit text-lg",
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
