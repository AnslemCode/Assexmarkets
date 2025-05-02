"use client";

import React from "react";
import { MovingCards } from "@/components/ui/moving-card";
import {
  CheckIcon,
  ClockIcon,
  ListIcon,
  UserGroupIcon,
} from "../../public/icons/svgs";

const Features = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        {/* Optional heading */}
        {/* <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#1f0e3f]">Why Traders Choose Us</h2> */}

        <div className="w-full max-w-7xl">
          <MovingCards items={features} direction="left" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Features;

const features = [
  {
    icon: <UserGroupIcon />,
    label: "100K+ Active Traders",
  },
  {
    icon: <ListIcon />,
    label: "Multiple Regulatory Licenses",
  },
  {
    icon: <ClockIcon />,
    label: "24/7 Customer Support",
  },
  {
    icon: <CheckIcon />,
    label: "PCI DSS Certified",
  },
];
