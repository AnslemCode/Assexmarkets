import MarketHeader from "@/components/marketsComponent/MarketHeader";
import Image from "next/image";

const IndicesPageHeader = () => (
  <MarketHeader
    title="Competitive Spreads on Major Global Indices"
    description="Indices, also called stock indexes, reflect the performance of a group of selected stocks or assets traded on a specific exchange. Well-known global indices include the Dow Jones Industrial Average, ASX 200, Hang Seng, CN50, and the Straits Times Index. Each index follows its own methodology and criteria for selecting the stocks it comprises."
    button1Text="Create a Live Account"
    button2Text="Try a Free Demo"
    imageElement={
      <Image
        src="/images/world.png"
        alt="World image"
        width={500}
        height={333}
        className="object-cover"
        priority
      />
    }
  />
);

export default IndicesPageHeader;
