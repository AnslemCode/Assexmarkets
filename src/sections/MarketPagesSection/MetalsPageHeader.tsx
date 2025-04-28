import MarketHeader from "@/components/marketsComponent/MarketHeader";
import Image from "next/image";

const MetalsPageHeader = () => (
  <MarketHeader
    title="Trade Metal CFDs"
    description="Indices, also called stock indexes, reflect the performance of a group of selected stocks or assets traded on a specific exchange. Well-known global indices include the Dow Jones Industrial Average, ASX 200, Hang Seng, CN50, and the Straits Times Index. Each index follows its own methodology and criteria for selecting the stocks it comprises."
    button1Text="Create a Live Account"
    button2Text="Try a Free Demo"
    imageElement={
      <div className="relative w-full max-w-[400px] aspect-[2/3]">
        <Image
          src="/images/goldmint.png"
          alt="Gold mint"
          fill
          className="object-contain rounded-xl"
          priority
        />
      </div>
    }
  />
);

export default MetalsPageHeader;
