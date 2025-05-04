"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenuContext } from "@/context/MobileMenuContext";
import Close from "./icons/Close";
// import CaretUp from "./icons/CaretUp";
import Link from "next/link";
import Image from "next/image";
import { navigationLinks, staticLinks } from "@/constants";
import MobileDropdown from "./MobileDropdown";
import CaretDown from "./icons/CaretDown";
import { WhiteFlameButtonIcon } from "../../public/icons/ButtonIcons";

export default function MobileMenu() {
  const [activeLinkId, setActiveLinkId] = useState<number>(-1);
  const { menuOpened, setMenuOpened } = useMenuContext();

  useEffect(() => {
    document.body.style.overflow = menuOpened ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpened]);

  return (
    <AnimatePresence>
      {menuOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-white text-gray-900 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5">
            <Link href="/" onClick={() => setMenuOpened(false)}>
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="h-auto w-auto"
              />
            </Link>
            <button
              onClick={() => {
                setMenuOpened(false);
                setActiveLinkId(-1);
              }}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Close />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="p-5 overflow-y-auto flex-1">
            <ul className="flex flex-col gap-4">
              {navigationLinks.map((link) => {
                const isActive = activeLinkId === link.id;

                return (
                  <li key={link.id} className="flex flex-col">
                    <button
                      className="font-secondary flex justify-between items-center w-full text-left py-2 px-1 font-bold text-lg hover:text-primary transition"
                      onClick={() => setActiveLinkId(isActive ? -1 : link.id)}
                    >
                      <span>{link.text}</span>
                      {link.dropdown && (
                        <motion.span
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CaretDown className="w-4 h-4 fill-gray-500" />
                        </motion.span>
                      )}
                    </button>

                    <AnimatePresence>
                      {isActive && link.dropdown && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -5 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -5 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden ml-2 pl-2 py-4 border border-[#4B8BFF] rounded-lg bg-[#1da1f2]/5"
                        >
                          <MobileDropdown
                            links={link.dropdownLinks}
                            onLinkClick={() => setMenuOpened(false)}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}

              {staticLinks.map((link) => (
                <li key={link.href} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpened(false)}
                    className="font-secondary flex justify-between items-center w-full text-left py-2 px-1 font-bold text-lg hover:text-primary transition"
                  >
                    <span>{link.text}</span>
                    <span className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons */}

          <div className="p-6 flex flex-col gap-5">
            <Link
              href="/signup"
              onClick={() => setMenuOpened(false)}
              className="group flex items-center justify-center gap-2 bg-primary text-white text-center py-3 rounded-full font-semibold transition-all duration-300 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/50 hover:bg-primary/90 hover:scale-[1.02]"
            >
              <WhiteFlameButtonIcon />
              Sign Up
            </Link>
            <Link
              href="/signin"
              onClick={() => setMenuOpened(false)}
              className="group flex items-center justify-center gap-2 text-primary text-center border border-primary py-3 rounded-full font-semibold transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/5 hover:scale-[1.02]"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.85547 14.6001C3.85547 19.6001 7.88491 23.6001 12.8555 23.6001C17.8261 23.6001 21.8555 19.6001 21.8555 14.6001C21.8555 7.55244 16.3367 3.5708 13.9423 2.17498C13.641 1.99932 13.4903 1.91149 13.3238 1.93151C13.1903 1.94755 13.0419 2.0388 12.9674 2.15062C12.8743 2.29021 12.885 2.46958 12.9064 2.82833C13.1026 6.12084 13.6407 12.6001 10.284 12.6001C8.12733 12.6001 7.7795 10.8805 7.7234 8.16253C7.71372 7.69373 7.70889 7.45933 7.58008 7.31998C7.47653 7.20796 7.29287 7.14277 7.14186 7.16444C6.95403 7.19141 6.81645 7.35383 6.54129 7.67869C5.40635 9.01859 3.85547 11.4296 3.85547 14.6001Z"
                  fill="#0DAE94"
                />
              </svg>
              Sign In
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
