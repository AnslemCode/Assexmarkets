"use client";
import Image from "next/image";
import { testimonials } from "@/constants";
import { useMemo } from "react";
import GlowCard from "./GlowCard";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="32"
        height="32"
        viewBox="0 0 50 50"
      >
        <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
      </svg>
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
