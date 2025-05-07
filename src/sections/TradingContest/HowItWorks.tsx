"use client";

import Badge from "@/components/Badge";
import StepCard from "@/components/pageComponents/StepCard";
import { motion } from "framer-motion";
import React from "react";

const steps = [
  {
    step: "01",
    text: (
      <>
        Register for the Contest through your{" "}
        <span className="text-[#0dae94]">Assexmarkets</span> dashboard.
      </>
    ),
  },
  {
    step: "02",
    text: (
      <>
        Trade on a <span className="text-[#0dae94]">Live Account</span> – no
        simulations, no shortcuts.
      </>
    ),
  },
  {
    step: "03",
    text: "Climb the Leaderboard based on your trading performance.",
  },
  {
    step: "04",
    text: "Win Prizes and bragging rights at the end of the contest period!",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HowItWorks = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <Badge text="Trading Contest" />
        <h1 className="font-secondary font-bold text-base sm:text-xl md:text-2xl lg:text-[32px] text-[#191A15] mt-6 text-center">
          How it works
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center mt-6 max-w-[879px] mx-auto">
          Trading Forex CFDs (Contracts for Difference) lets you speculate on
          the price movements of currency pairs without owning the underlying
          assets. At AssexMarkets, we make it simple, fast, and secure to get
          started — whether you&apos;re a beginner or ready to scale your
          strategy.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 flex flex-wrap justify-center gap-10"
        >
          {steps.map((item, index) => (
            <StepCard key={index} stepNumber={item.step}>
              <p>{item.text}</p>
            </StepCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

// import Badge from "@/components/Badge";
// import StepCard from "@/components/pageComponents/StepCard";
// import React from "react";

// const steps = [
//   {
//     step: "01",
//     text: (
//       <>
//         Register for the Contest through your{" "}
//         <span className="text-[#0dae94]">Assexmarkets</span> dashboard.
//       </>
//     ),
//   },
//   {
//     step: "02",
//     text: (
//       <>
//         Trade on a{" "}
//         <span className="text-[#0dae94]">Trade on a Live Account</span> – no
//         simulations, no shortcuts.
//       </>
//     ),
//   },
//   {
//     step: "03",
//     text: "Climb the Leaderboard based on your trading performance.",
//   },
//   {
//     step: "04",
//     text: "Win Prizes and bragging rights at the end of the contest period!",
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <section className="section-padding">
//       <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
//         <Badge text="Trading Contest" />
//         <h1 className="font-secondary font-bold text-[40px] text-[#191A15] mt-6">
//           How it works
//         </h1>
//         <p className="text-xl text-center mt-6 max-w-[879px] mx-auto">
//           Trading Forex CFDs (Contracts for Difference) lets you speculate on
//           the price movements of currency pairs without owning the underlying
//           assets. At AssexMarkets, we make it simple, fast, and secure to get
//           started — whether you&apos;re a beginner or ready to scale your
//           strategy.
//         </p>

//         <div className="mt-16 flex flex-wrap justify-center gap-20">
//           {steps.map((item, index) => (
//             <StepCard key={index} stepNumber={item.step}>
//               <p className="">{item.text}</p>
//             </StepCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

// import React from "react";

// interface StepCardProps {
//   stepNumber: string;
//   children: React.ReactNode;
// }

// const StepCard: React.FC<StepCardProps> = ({ stepNumber, children }) => {
//   return (
//     <div className="flex flex-col items-start text-left gap-2 max-w-[286px] w-full">
//       <span className="text-8xl leading-25 text-[#E5E7EB]">{stepNumber}</span>
//       <div className="mt-10 text-lg font-medium text-[#676D79]">{children}</div>
//     </div>
//   );
// };

// export default StepCard;
