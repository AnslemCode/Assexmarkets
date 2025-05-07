import MarketHeader from "@/components/marketsComponent/MarketHeader";
import Image from "next/image";

const CurrencyCalculatorHeader = () => (
  <MarketHeader
    title="Assexmarkets Currency Converter"
    description="Convert any major or exotic currency pair instantly with our intuitive currency converter. Simply enter your amount, select your currencies, and get real-time exchange rates at your fingertips. Perfect for travelers, investors, and international shoppers who need quick, accurate conversions on the go. Our tool provides live market rates and historical data to help you make informed currency decisions, whether you're planning a vacation, managing international business transactions, or diversifying your investment portfolio across global"
    // button1Text="Create a Live Account"
    // button2Text="Try a Free Demo"
    imageElement={
      <Image
        src="/images/CurrencyCalculator.png"
        alt="Currency Calculator"
        width={258}
        height={236}
        className="object-cover"
        priority
      />
    }
  />
);

export default CurrencyCalculatorHeader;
