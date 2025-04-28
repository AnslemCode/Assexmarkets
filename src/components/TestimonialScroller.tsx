"use client";
import Image from "next/image";
import { testimonials } from "@/constants";
import { useMemo } from "react";
import GlowCard from "./GlowCard";
import { XIcon } from "../../public/icons/SocialIcons";

const getShuffledTestimonials = () => {
  const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
  return [...shuffled, ...shuffled]; // Duplicate for more content
};

const splitIntoColumns = (items: typeof testimonials, count: number) => {
  const columns: (typeof testimonials)[] = Array.from(
    { length: count },
    () => []
  );
  items.forEach((item, idx) => {
    columns[idx % count].push(item);
  });
  return columns;
};

const TestimonialCard = ({
  name,
  mentions,
  imgPath,
}: (typeof testimonials)[number]) => (
  //   <div className="card p-4 rounded-lg bg-white shadow-md mb-4">
  <div className="profile flex items-center justify-between gap-4 mb-2">
    <div className="flex items-center gap-4">
      <Image
        src={imgPath}
        width={56}
        height={56}
        alt={name}
        className="rounded-full"
      />
      <div>
        <p className="font-extraboldbold text-black">{name}</p>
        <p className="text-[#9CA3AF] text-sm">{mentions}</p>
      </div>
    </div>
    <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl ">
      <XIcon />
    </div>
  </div>
  // <div className="content text-black text-sm">{review}</div>
  //   </div>
);

const TestimonialScroller = () => {
  const shuffled = useMemo(() => getShuffledTestimonials(), []);
  const columns = useMemo(() => splitIntoColumns(shuffled, 3), [shuffled]);

  return (
    <div className="testimonial-wrapper flex gap-6 overflow-hidden">
      {columns.map((column, i) => (
        <div key={i} className="column w-full">
          <div
            className={`testimonials flex flex-col gap-4 ${
              i % 2 === 0 ? "scroll-up" : "scroll-down"
            }`}
          >
            {column.map((testimonial, idx) => (
              <GlowCard card={testimonial} key={idx} index={idx}>
                <TestimonialCard
                  key={`${testimonial.name}-${idx}`}
                  {...testimonial}
                />
              </GlowCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialScroller;
