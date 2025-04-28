// import GlowCard from "@/components/GlowCard";
// import { testimonials } from "@/constants";
// import Image from "next/image";
// import { XIcon } from "../../public/icons/SocialIcons";
// import { CardSpotlight } from "@/components/ui/card-spotlight";

import TestimonialScroller from "@/components/TestimonialScroller";

const Testimonial = () => {
  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Left Column */}
        <div className="">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-secondary text-[#1f0e3f] font-bold mb-4">
            What users are saying
          </h2>
          <p className="text-base sm:text-lg mb-6 max-w-full sm:max-w-md">
            These are real-time reviews from our users about Assexmarkets.
          </p>
          <span className="inline-block bg-[#e6f9f7] text-[#0dae94] px-4 py-1 rounded-full font-semibold text-xs sm:text-sm">
            Customer Stories
          </span>
        </div>

        {/* Testimonial Scroller */}
        <div className="w-full">
          <TestimonialScroller />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
