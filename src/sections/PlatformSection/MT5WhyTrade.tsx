import React from "react";
import { DualBulletPointSection } from "../TradingPagesSection/DualBulletPoint";

const MT5WhyTrade = () => {
  return (
    <DualBulletPointSection
      generalTitle="What you can trade on MT5"
      generalDescription="At Assexmarkets, you can enjoy trading CFDs on more than 200 instruments, which include trading forex currency pairs, metals, cryptocurrencies, stocks, indices and energies."
      leftSections={[
        {
          sectionTitle: "",
          sectionText: "",
          bulletPoints: [
            {
              title: "Forex",
              description: (
                <>
                  <p>
                    At Assexmarkets, you can enjoy trading CFDs on more than 200
                    instruments, which include trading forex currency pairs,
                    metals, cryptocurrencies, stocks, indices and energies.
                    Forex
                  </p>

                  <p className="mt-4">
                    There are more than 100 currency pairs available for CFD
                    trading on MT5 in Assexmarkets. We offer major currency
                    pairs, including EURUSD, GBPUSD and USDJPY, and minor
                    currency pairs. There is also a long list of exotic pairs
                    available for you to trade CFDs on. Learn more
                  </p>
                </>
              ),
            },
            {
              title: "Cryptocurrency",
              description:
                "24/7 swap-free trading on top cryptocurrencies including Bitcoin, Ethereum, Litecoin",
            },
            {
              title: "Stocks",
              description:
                "Gain exposure to a large selection of stock CFDs while trading on MT5 with Assexmarkets. Trade CFDs on stocks from different industries, such as technology (APPL, META), consumer discretionary (TSLA), consumer staples (KO) and others. ",
            },
          ],
        },
      ]}
      rightSections={[
        {
          sectionTitle: "",
          sectionText: "",
          bulletPoints: [
            {
              title: "Indices",
              description:
                "Diversify your portfolio and trade CFDs on major stock indices from the US, UK, Germany, Japan, and China on MT5 with Assexmarkets. Access popular global indices like the Dow Jones, NASDAQ, FTSE 100, and NIKKEI 225. Learn more",
            },
            {
              title: "Metals",
              description:
                "On MT5 with Assexmarkets, you can trade CFDs on metals in the form of currency pairs, which include XAUUSD, XAUEUR, XAUGBP and XAUAUD for gold and XAGUSD, XAGEUR, XAGGBP and XAGAUD for silver. You can also trade on platinum (XPT) and palladium (XPD) in currency pairs. Learn more",
            },
          ],
        },
      ]}
    />
  );
};

export default MT5WhyTrade;
