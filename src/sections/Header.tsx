"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import clsx from "clsx";
import Hamburger from "@/components/icons/Hamburger";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "font-secondary py-4.5 border-b border-white/20 sticky top-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "backdrop-blur-lg shadow-md" : "backdrop-blur-md"
      )}
    >
      {/* optional background blur behind header */}
      <div className="absolute inset-0 backdrop-blur -z-10" />

      <div className="w-full mx-auto px-8 md:px-20">
        <div className="flex items-center justify-between p-2.5 rounded-xl backdrop-blur-lg relative">
          {/* Logo and Hamburger for mobile/tablet */}
          <div className="flex items-center justify-between w-full xl:hidden">
            <Link href="/" className="flex items-center">
              <Image
                src={"/images/logo.svg"}
                alt="Logo"
                width={64}
                height={38}
              />
            </Link>

            {/* Always show hamburger for mobile and tablet */}
            <Hamburger />
          </div>

          {/* Desktop Navbar for lg+ screens */}
          <div className="hidden xl:flex items-center justify-between w-full">
            {/* Logo for Desktop */}
            <Link href="/" className="flex items-center">
              <Image
                src={"/images/logo.svg"}
                alt="Logo"
                width={64}
                height={38}
              />
            </Link>

            <Navbar className="top-0" />

            {/* Auth Buttons for desktop */}
            <div className="flex items-center gap-3">
              <Link
                href="/signup"
                className="font-secondary font-bold text-white bg-[#0DAE94] px-4.5 py-2 text-sm rounded-4xl whitespace-nowrap"
              >
                Sign Up
              </Link>
              <Link
                href="/signin"
                className="font-secondary font-bold border border-[#0DAE94] text-[#0DAE94] px-4.5 py-2 text-sm rounded-4xl whitespace-nowrap"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
