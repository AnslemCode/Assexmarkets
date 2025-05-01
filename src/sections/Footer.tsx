import React from "react";
import Image from "next/image";
import {
  DribbleIcon,
  LinkedInIcon,
  XIcon,
} from "../../public/icons/SocialIcons";

const footerLinks = [
  {
    title: "Accounts",
    links: [
      "Live Trading Accounts",
      "Simulated Trading Accounts",
      "Copy Trading",
      "Trading Contest",
      "Portfolio Management Account",
    ],
  },
  {
    title: "Conditions",
    links: ["Deposit & Withdrawals", "Fees", "Client Protection"],
  },
  {
    title: "Markets",
    links: ["Forex CFO", "Crypto CFO", "Indices", "Metals", "Commodities CFO"],
  },
  {
    title: "Platform",
    links: ["Metatrader 5"],
  },
  {
    title: "Company",
    links: ["About Us", "Why AssexMarkets?", "Contact Us", "Help Center"],
  },
  {
    title: "Others",
    links: ["FAQ", "User Agreement", "Imprint Risk Disclosure"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#00CCB1]/12 py-16 px-4 sm:px-6 text-sm">
      <div className="max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/images/logo.svg"
            alt="Assexmarkets Logo"
            width={64}
            height={38}
          />
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
          {footerLinks.map((section) => (
            <div key={section.title} className="min-w-[140px]">
              <h4 className="font-medium mb-4 text-[#191a45]">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="hover:font-semibold cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap"
                    title={link}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-[#00CCB1] mt-12 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 text-xs text-[#191a45] mb-8">
          <p className="text-center sm:text-left">
            © 2025 AssexMarkets Ltd. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            {/* Legal Links */}
            <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
              <span className="hover:font-semibold cursor-pointer whitespace-nowrap">
                Terms & Conditions
              </span>
              <span className="hover:font-semibold cursor-pointer whitespace-nowrap">
                Privacy Policy
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 items-center justify-center">
              <XIcon />
              <DribbleIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="space-y-4 text-xs leading-relaxed text-[#191a45]">
          <p>
            Assexmarkets Global Ltd is authorised by the Financial Services
            Regulatory Authority (FSRA) in St. Lucia in compliance with the
            (RATLA) IBC Act 12.14 section 10(5) with registration number
            2024-00223 and a registered office of Assexmarkets Global Ltd is at
            Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint
            Lucia. P.O. Box 838, Castries, Saint Lucia.
          </p>
          <p>
            <strong>Risk Warning:</strong> Trading Contracts for Difference
            (CFDs) and other leveraged products involves significant risk of
            loss and is not suitable for all investors. CFDs are complex
            instruments and come with a high risk of losing money rapidly due to
            leverage. You should carefully consider your investment objectives,
            level of experience, and risk appetite before deciding to trade
            CFDs. Do not invest more than you can afford to lose. Ensure you
            fully understand the risks involved and seek independent financial
            advice if necessary.
          </p>
          <p>
            <strong>Disclaimer:</strong> Assexmarkets Global Ltd does not offer
            services to US, Pakistan, Iraq, Iran, Uzbekistan, or any other
            jurisdiction where such distribution or use would be contrary to
            local law or regulation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
