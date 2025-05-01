import { NavigationLink } from "@/utils/contentTypes";
import { motion } from "motion/react";
import Link from "next/link";

interface MobileDropdownProps {
  links: NavigationLink[] | undefined;
}

export default function MobileDropdown({ links }: MobileDropdownProps) {
  return (
    <motion.ul
      exit={{ height: 0, opacity: 0 }}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="pl-4 flex flex-col gap-3"
    >
      {links?.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className="text-sm text-gray-600 hover:text-primary transition font-medium"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}
