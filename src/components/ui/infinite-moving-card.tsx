"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo: string;
    name: string;
    badge: string;
    price: string;
    trend: string;
    trendImage: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[309px] shrink-0 rounded-2xl border border-[#BEBEBE]/35 bg-white px-6 py-5"
            key={item.name}
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                width={42}
                height={42}
                className="object-contain"
              />

              <p className="text-lg">{item.name}</p>
              <span className="text-[10px] text-white bg-[#0DAE94] px-3 py-2 rounded-sm">
                {item.badge}
              </span>
            </div>

            <hr className="border-t border-[#BEBEBE]/35 my-2" />

            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-medium text-black">{item.price}</p>
                <p
                  className={cn(
                    "text-lg",
                    item.trend.startsWith("+")
                      ? "text-[#34C659]"
                      : "text-[#F40E0E]"
                  )}
                >
                  {item.trend}
                </p>
              </div>
              <Image
                src={item.trendImage}
                alt="trend graph"
                width={100}
                height={54}
                className="object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
