import { NavigationLink } from "@/utils/contentTypes";
import { motion } from "motion/react";

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
      className="z-10 flex flex-col gap-y-4 pl-3 overflow-hidden"
    >
      {links?.map((link) => (
        <motion.li key={link.id}>
          <a className="text-grey-600 font-secondary text-base" href="#">
            {link.text}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
