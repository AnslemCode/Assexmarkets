"use client";
import React from "react";
import clsx from "clsx";

type CustomButtonProps = {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "primary" | "outlinedDark" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean; // 👈
};

const Button: React.FC<CustomButtonProps> = ({
  text,
  icon,
  onClick,
  className = "",
  variant = "default",
  size = "sm",
  type = "button",
  fullWidth = false, // 👈
}) => {
  const baseStyles =
    "font-secondary inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 ease-in-out shadow-lg hover:shadow-xl active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0dae94] whitespace-nowrap";

  const variantStyles = {
    primary: "bg-[#0dae94] text-white hover:bg-[#0ca88d]",
    outlinedDark:
      "bg-white text-[#2D3139] border border-[#676d79] hover:border-[#2D3139]",
    ghost:
      "bg-transparent text-[#0dae94] border border-[#0dae94] hover:bg-white hover:text-[#0dae94]",
    default: "bg-white text-[#0dae94] hover:bg-[#e6f7f4]",
  };

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm min-w-[144px] h-[42px]",
    md: "px-6 py-3 text-base min-w-[288px] h-[48px]",
    lg: "px-7 py-3.5 text-lg min-w-[352px] h-[56px]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
