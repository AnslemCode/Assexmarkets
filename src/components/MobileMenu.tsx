"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useMenuContext } from "@/context/MobileMenuContext";
import Close from "./icons/Close";
import { navigationLinks } from "@/constants";
import MobileDropdown from "./MobileDropdown";
import CaretUp from "./icons/CaretUp";
import Link from "next/link";

export default function MobileMenu() {
  const [activeLinkId, setActiveLinkId] = useState<number>(-1);
  const { menuOpened, setMenuOpened } = useMenuContext();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex justify-end"
          onClick={() => {
            setMenuOpened(false);
            setActiveLinkId(-1);
          }}
        >
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="h-full w-full max-w-[22rem] bg-white/70 backdrop-blur-xl shadow-2xl p-6 flex flex-col rounded-l-3xl"
            onClick={(e) => e.stopPropagation()} // prevent click inside nav from closing menu
          >
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => {
                  setMenuOpened(false);
                  setActiveLinkId(-1);
                }}
                className="rounded-full p-2 transition hover:bg-gray-200"
              >
                <Close />
              </button>
            </div>

            {/* Nav Links */}
            <ul className="flex flex-col gap-5">
              {navigationLinks.map((link) => {
                const isActive = activeLinkId === link.id;

                return (
                  <li
                    key={link.id}
                    className={`group flex flex-col transition-all duration-300 ${
                      isActive ? "gap-4" : "gap-0"
                    }`}
                    onClick={() => setActiveLinkId(isActive ? -1 : link.id)}
                  >
                    <div className="flex items-center justify-between cursor-pointer">
                      <span
                        className={`font-secondary text-[17px] font-medium transition-colors group-hover:text-primary ${
                          isActive ? "text-primary" : "text-gray-800"
                        }`}
                      >
                        {link.text}
                      </span>
                      {link.dropdown && (
                        <motion.span
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CaretUp className="fill-gray-600 w-4 h-4" />
                        </motion.span>
                      )}
                    </div>

                    <AnimatePresence>
                      {isActive && link.dropdown && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -5 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -5 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <MobileDropdown links={link.dropdownLinks} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-auto pt-12 flex flex-col gap-4">
              <Link
                href="/signup"
                className="bg-primary text-white hover:bg-primary/90 px-5 py-3 rounded-full text-sm font-semibold text-center transition"
              >
                Sign Up
              </Link>
              <Link
                href="/signin"
                className="text-primary border border-primary hover:bg-primary/5 px-5 py-3 rounded-full text-sm font-semibold text-center transition"
              >
                Sign In
              </Link>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
