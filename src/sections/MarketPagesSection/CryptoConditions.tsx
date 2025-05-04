import React from "react";
import { DualBulletPointSection } from "../TradingPagesSection/DualBulletPoint";

const CryptoConditions = () => {
  return (
    <DualBulletPointSection
      generalTitle="Crypto Market Conditions"
      generalDescription="The crypto market is a digital currency market that uses blockchain technology to create new coins and provide users with secure transactions. Trading crypto derivatives allows you to diversify your online portfolio and capitalize on the movements of cryptocurrency prices, whether they’re rising or falling."
      leftSections={[
        {
          sectionTitle: "",
          sectionText: "",
          bulletPoints: [
            {
              title: "Crypto Trading Hours",
              description: (
                <>
                  <p>
                    You can trade cryptocurrencies 24/7 except during server
                    maintenance. We will inform you via email when this takes
                    place.
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>
                      BTCAUD, BTCJPY, BTCCNH, BTCTHB, BTCZAR: on Sunday from
                      20:35 to 21:05
                    </li>
                    <li>
                      BTCXAU, BTCXAG: Monday - Thursday from 20:58 to 22:01
                    </li>
                  </ul>
                  <p className="mt-4">
                    All timings are in server time (GMT+0).
                  </p>
                </>
              ),
            },
            {
              title: "Spreads",
              description:
                "Spreads are always floating, so the spreads in the table above are yesterday’s averages. For live spreads, please refer to the trading platform. Please note that spreads may widen when the markets experience lower liquidity. This may persist until liquidity levels are restored.",
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
              title: "Swaps",
              description: "No swap is charged on cryptocurrency positions.",
            },
            {
              title: "Fixed Margin Requirements",
              description:
                "Margin requirements for exotic currency pairs always remain fixed, regardless of the leverage you use.",
            },
            {
              title: "Stop Level",
              description:
                "Please note that the stop level values in the table above are subject to change and may not be available for traders using certain high-frequency trading strategies or Expert Advisors.",
            },
          ],
        },
      ]}
    />
  );
};

export default CryptoConditions;
