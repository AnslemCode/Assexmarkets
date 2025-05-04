import MarketHeader from "@/components/marketsComponent/MarketHeader";
import Image from "next/image";

const TradingCalculatorHeader = () => (
  <MarketHeader
    title="Trading Calculator"
    description="Instantly calculate pips, margin, spread, and commission for any position with this simple yet powerful tool—designed to help you make smarter investment decisions. Our AssexMarkets investment calculator takes the guesswork out of trading. Plan your entries and exits with precision, determine potential profit or loss scenarios, and manage risk effectively before executing trades. Whether you're a beginner learning to navigate trading costs or an experienced trader optimizing your strategy, our comprehensive calculator provides the clarity you need to trade with confidence in today's dynamic markets."
    // button1Text="Create a Live Account"
    // button2Text="Try a Free Demo"
    imageElement={
      <Image
        src="/images/TradingCalculator.png"
        alt="Trading Calculator"
        width={350}
        height={379}
        className="object-cover"
        priority
      />
    }
  />
);

export default TradingCalculatorHeader;
