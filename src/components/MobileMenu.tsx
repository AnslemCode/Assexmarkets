"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useMenuContext } from "@/contexta/MobileMenuContext";
import Close from "./icons/Close";
import { navigationLinks } from "@/constants";
import MobileDropdown from "./MobileDropdown";
import CaretUp from "./icons/CaretUp";
import Link from "next/link";

export default function MobileMenu() {
  const [activeLinkId, setActiveLinkId] = useState<number>(-1);
  const { menuOpened } = useMenuContext();

  return (
    <motion.div
      animate={menuOpened ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "flex" },
      }}
      transition={{ duration: 0.25 }}
      className="fixed top-0 right-0 bottom-0 left-0 hidden justify-end bg-black/30 z-[9999] pl-30"
    >
      <motion.nav
        animate={menuOpened ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: "100%" },
          visible: { opacity: 1, x: "0%" },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex h-full w-full max-w-96 min-w-65 flex-col items-start bg-white p-7 pt-6"
      >
        {/* Close Button */}
        <div className="mb-4 self-end">
          <Close />
        </div>

        {/* Nav Links */}
        <motion.ul
          animate={menuOpened ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: "100%" },
            visible: { opacity: 1, x: "0%" },
          }}
          transition={{ ease: "easeOut", delay: 0.05 }}
          className="flex flex-col gap-y-7 w-full"
        >
          {navigationLinks.map((link) => (
            <li
              key={link.id}
              className={`group relative flex flex-col transition-all duration-300 ${
                activeLinkId === link.id ? "gap-y-4" : "gap-y-0"
              }`}
              onClick={() =>
                setActiveLinkId(activeLinkId === link.id ? -1 : link.id)
              }
            >
              <div className="flex cursor-pointer items-center justify-between">
                <a
                  className={`font-secondary text-lg font-medium text-grey-600 ${
                    activeLinkId === link.id ? "text-[#0DAE94]" : ""
                  }`}
                  href="#"
                >
                  {link.text}
                </a>
                {link.dropdown && (
                  <span
                    className={`transition-transform duration-300 ${
                      link.id === activeLinkId ? "rotate-180" : ""
                    }`}
                  >
                    <CaretUp className="fill-grey-600 size-4 transition-transform duration-300" />
                  </span>
                )}
              </div>

              <AnimatePresence>
                {link.dropdown && activeLinkId === link.id && (
                  <MobileDropdown links={link.dropdownLinks} />
                )}
              </AnimatePresence>
            </li>
          ))}
        </motion.ul>

        {/* Auth Buttons */}
        <div className="mt-auto w-full pt-12 flex flex-col gap-3">
          <Link
            href="/signup"
            className="font-secondary font-bold text-white bg-[#0DAE94] px-5 py-3 text-sm rounded-4xl text-center w-full"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="font-secondary font-bold border border-[#0DAE94] text-[#0DAE94] px-5 py-3 text-sm rounded-4xl text-center w-full"
          >
            Sign In
          </Link>
        </div>
      </motion.nav>
    </motion.div>
  );
}
