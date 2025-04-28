import React from "react";
import { DualBulletPointSection } from "../TradingPagesSection/DualBulletPoint";

const ForexConditions = () => {
  return (
    <DualBulletPointSection
      generalTitle="Forex Market Conditions"
      generalDescription="The forex market is the largest financial market in the world. With over $5.5 trillion in daily trading volume, currency pair trading presents endless opportunities 24 hours a day, 5 days a week."
      leftSections={[
        {
          sectionTitle: "",
          sectionText: "",
          bulletPoints: [
            {
              title: "Forex Trading Hours",
              description: (
                <>
                  <p>
                    Forex market trading hours is from Sunday 21:05 to Friday
                    20:59, however, currency pairs below have their own trading
                    hours:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>USDCNH, USDTHB: Sunday 23:05 to Friday 20:59</li>
                    <li>
                      USDILS, GBPILS: Monday 05:00 to Friday 15:00 (daily break
                      15:00–05:00)
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
                "Spreads are always floating. Because of this, the spreads in the above table are averages based on the previous trading day. For live spreads, please refer to the trading platform Please note that spreads may widen when the markets experience lower liquidity, including rollover time. This may persist until liquidity levels are restored. Our lowest spreads are on Zero account and remain fixed at 0.0 pips for 95% of the trading day. These instruments are marked with an asterisk in the table.",
            },
            {
              title: "Swaps",
              description:
                "Swap is the interest that is applied to all forex trading positions that are left open overnight. Swaps occur at 21:00 GMT+0 each day, excluding the weekend, until the position is closed. To help you estimate your swap costs, you can use our handy Assexmarkets calculator. Please bear in mind that when trading forex pairs, triple swaps are charged on Wednesdays to cover financing costs incurred over the weekend. We do not charge swaps for the instruments marked in the table above if you have Extended swap- free status. If you are a resident of a Muslim country, all accounts are automatically swap-free.",
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
              title: "Dynamic Margin Requirements",
              description:
                "The margin requirement for your account is tied to the amount of leverage you use. Changing leverage will cause margin requirements to change. Just as spreads may change depending on market conditions, the amount of leverage available to you can also vary. You can read more about the changes in margin requirements in the FAQ section below",
            },
            {
              title: "Fixed Margin Requirements",
              description:
                "Margin requirements for exotic currency pairs always remain fixed, regardless of the leverage you use. The margin for these instruments is held in accordance with the instruments&apoos; margin requirements and is not affected by the leverage on your account.",
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

export default ForexConditions;
