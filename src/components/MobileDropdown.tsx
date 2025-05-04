import { NavigationLink } from "@/utils/contentTypes";
import { motion } from "framer-motion";
import Link from "next/link";

interface MobileDropdownProps {
  links: NavigationLink[] | undefined;
}

export default function MobileDropdown({ links }: MobileDropdownProps) {
  return (
    <motion.ul
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-2 py-2"
    >
      {links?.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className="block text-sm hover:text-primary transition font-medium px-2 py-1"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}
