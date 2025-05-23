import MarketHeader from "@/components/marketsComponent/MarketHeader";
import Image from "next/image";

const MetalsPageHeader = () => (
  <MarketHeader
    title="Trade Metal CFDs"
    description="Take a position on gold, silver and copper. We offer:"
    bulletPoints={[
      "Metals including XAU/USD (Gold) and XAG/USD (Silver)",
      "Competitive spreads",
    ]}
    button1Text="Create a Live Account"
    button2Text="Try a Free Demo"
    imageElement={
      <div className="relative w-full max-w-[400px]">
        <Image
          src="/images/goldmint.png"
          alt="Gold mint"
          height={400}
          width={400}
          className="object-contain rounded-xl"
          priority
        />
      </div>
    }
  />
);

export default MetalsPageHeader;
