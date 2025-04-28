import Badge from "@/components/Badge";
import { InfoBox } from "@/components/pageComponents/InfoBox";
import Image from "next/image";
import {
  CardIcon,
  CupIcon,
  GlobeIcon,
  RadarIcon,
} from "../../../public/icons/svgs";

const WhyChooseUs = () => {
  return (
    <section className="my-30">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-6 text-center">
        <Badge text="Why Choose Us" />
        <h1 className="font-secondary font-bold text-[40px] text-[#191A15] mt-6">
          Smooth trading journey from sign-up to success
        </h1>
        <p className="text-xl mt-6 max-w-3xl">
          Benefit from our unrivaled payments ecosystem: seamless deposits via
          global and local payment systems, 24/7 access and hassle-free release
          of funds.
        </p>

        {/* Image + Boxes Section */}
        <div className="relative mt-20 w-full flex justify-center items-center">
          {/* Top Left Box */}
          <div className="absolute top-0 left-0 max-w-xs text-left">
            <InfoBox
              icon={<CardIcon />}
              title="Payment methods for your convenience"
              description="Global, local and secure payment methods for seamless deposits and withdrawals."
            />
          </div>

          {/* Bottom Left Box */}
          <div className="absolute bottom-0 left-0 max-w-xs text-left">
            <InfoBox
              icon={<CupIcon />}
              title="Forget about withdrawal fees"
              description="We pay your third-party transaction fees so you don't have to."
            />
          </div>

          {/* Top Right Box */}
          <div className="absolute top-0 right-0 max-w-xs text-left">
            <InfoBox
              icon={<RadarIcon />}
              title="Your money is yours"
              description="Access your funds any day, any time with our instant withdrawal feature."
            />
          </div>

          {/* Bottom Right Box */}
          <div className="absolute bottom-0 right-0 max-w-xs text-left">
            <InfoBox
              icon={<GlobeIcon />}
              title="Trade globally with AssexMarkets"
              description="Take your trading to the next level with AssexMarkets — the platform designed for ambitious traders who want more than just local wins."
            />
          </div>

          {/* Central Image */}
          <div className="py-[20px] px-[36px]">
            <Image
              src="/images/Wallet.png"
              alt="Platform overview"
              width={640}
              height={427}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
