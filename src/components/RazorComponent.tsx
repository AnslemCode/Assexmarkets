"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { MonitorSmartphone, Rocket, TrendingUp } from "lucide-react";

export function RazorFeatureSection() {
  return (
    <section className="pt-6 pb-24 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 md:gap-8">
          <Card
            title="Razor Thin Spread"
            icon={<TrendingUp className="w-10 h-10 text-[#1f0d3f]" />}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-800"
            />
          </Card>

          <Card
            title="Lightning Fast Execution"
            icon={<Rocket className="w-10 h-10 text-[#1f0d3f]" />}
          >
            <CanvasRevealEffect
              animationSpeed={4}
              containerClassName="bg-indigo-800"
              colors={[
                [99, 102, 241],
                [139, 92, 246],
              ]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90 rounded-2xl" />
          </Card>

          <Card
            title="The Power of MT5"
            icon={<MonitorSmartphone className="w-10 h-10 text-[#1f0d3f]" />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-cyan-700"
              colors={[[34, 211, 238]]}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

// === Card Component ===
const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-6 relative h-[20rem] bg-white rounded-2xl shadow-md"
    >
      {/* <Icon className="absolute h-5 w-5 -top-2 -left-2  " />
      <Icon className="absolute h-5 w-5 -bottom-2 -left-2 " />
      <Icon className="absolute h-5 w-5 -top-2 -right-2 " />
      <Icon className="absolute h-5 w-5 -bottom-2 -right-2 " /> */}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
        <div className="mb-4 transition duration-300 flex items-center justify-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 ">
          {icon}
        </div>
        <h3 className="font-secondary text-2xl font-bold text-[#191a45] mb-6 transition duration-300 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white">
          {title}
        </h3>
        <p className="text-md leading-6 px-2 group-hover/canvas-card:text-white transition duration-300">
          {getCardText(title)}
        </p>
      </div>
    </div>
  );
};

// === Text Map ===
function getCardText(title: string) {
  switch (title) {
    case "Razor Thin Spread":
      return "Reduce your cost of execution by trading some of the tightest pricing in the industry. With spreads starting at 0.0 on EUR/USD and averaging at 0.2, making profitable trades has never been easier.";
    case "Lightning Fast Execution":
      return "With strong liquidity relationships and powerful technology, trades are executed in a snap. No re-quotes, no rejection, no manual trade delay.";
    case "The Power of MT5":
      return "We offer all our clients the best trading solution in the form of our MT4 accounts powered by data feed directly from our pool of prime liquidity providers.";
    default:
      return "";
  }
}

// === Aceternity Icon ===
// const AceternityIcon = () => (
//   <svg
//     width="66"
//     height="65"
//     viewBox="0 0 66 65"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white"
//   >
//     <path
//       d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//       stroke="currentColor"
//       strokeWidth="15"
//       strokeMiterlimit="3.86874"
//       strokeLinecap="round"
//       style={{ mixBlendMode: "darken" }}
//     />
//   </svg>
// );

// === Corner Icon ===
// const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth="1.5"
//     stroke="currentColor"
//     className={className}
//     {...rest}
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//   </svg>
// );
