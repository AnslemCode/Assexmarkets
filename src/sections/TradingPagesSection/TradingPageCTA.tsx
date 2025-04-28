"use client";
import Button from "@/components/Button";
import Image from "next/image";
import {
  VideoButtonIcon,
  WhiteFlameButtonIcon,
} from "../../../public/icons/ButtonIcons";
import { cn } from "@/lib/utils";

interface TradingPageCTAProps {
  isSimulatedPage?: boolean;
}

const TradingPageCTA: React.FC<TradingPageCTAProps> = ({
  isSimulatedPage = false,
}) => {
  const title = isSimulatedPage
    ? "Explore Assexmarkets assets and markets"
    : "Trade with a trusted broker today";

  const description = isSimulatedPage
    ? "Learn to trade with our various assets from leading global financial markets with the same conditions as on live trading accounts."
    : "Trade confidently and securely with AssexMarkets today.";

  const imageSrc = isSimulatedPage
    ? "/images/simulatedPageImage.svg" // Replace with your actual image path
    : "/images/cta-graphic.png";

  const imageWidth = isSimulatedPage ? 708 : 520;
  const imageHeight = isSimulatedPage ? 346 : 390;

  return (
    <section className="relative w-full bg-[#1f0d3f] pt-16 px-8">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#2e1d57_1px,transparent_1px),linear-gradient(to_bottom,#2e1d57_1px,transparent_1px)]"
        )}
      />
      {/* Radial Fade Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#1f0d3f] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text + Buttons */}
        <div className="text-white flex flex-col">
          <h2 className="font-secondary text-[40px] font-bold leading-tight">
            {title}
          </h2>
          <p className="text-lg mt-4">{description}</p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button
              icon={<WhiteFlameButtonIcon />}
              text="Create a Live Account"
              variant="primary"
            />
            <Button
              icon={<VideoButtonIcon />}
              text="Try a Free Demo"
              variant="ghost"
            />
          </div>
        </div>

        {/* Right: Image */}
        <div
          className="max-w-full"
          style={{ width: imageWidth, height: imageHeight }}
        >
          <Image
            src={imageSrc}
            alt="CTA Graphic"
            width={imageWidth}
            height={imageHeight}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default TradingPageCTA;
