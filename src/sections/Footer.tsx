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
      "Demo Trading Accounts",
      "Professional Accounts",
      "Standard Accounts",
      "Portfolio Management Account",
    ],
  },
  {
    title: "Conditions",
    links: ["Deposit & Withdrawals", "Fees", "Client Protection"],
  },
  {
    title: "Markets",
    links: ["Forex CFO", "Commodities CFO", "Indices", "Crypto CFO"],
  },
  {
    title: "About Us",
    links: ["Why AssexMarkets?", "Contact Us", "Help Center"],
  },
  {
    title: "Others",
    links: ["FAQ", "User Agreement", "Imprint Risk Disclosure"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#00CCB1]/12 py-16 text-sm">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/footerLogo.svg"
            alt="Assexmarkets Logo"
            width={56}
            height={56}
          />
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10">
          {footerLinks.map((section) => (
            <div key={section.title} className="min-w-0">
              <h4 className="font-medium mb-4 text-[#191a45]">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, idx) => (
                  <li key={idx} className="hover:font-semibold cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#00CCB1] mt-12 mb-6 h-[1px]" />

      <div className="max-w-6xl mx-auto">
        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-8 text-xs text-[#191a45]">
          <p>© 2025 AssexMarkets Ltd. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center">
            <div className="flex gap-3">
              <span className="hover:font-semibold cursor-pointer">
                Terms & Conditions
              </span>
              <span className="hover:font-semibold cursor-pointer">
                Privacy Policy
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="shrink-0 w-4 h-4 flex items-center justify-center rounded-xl">
                <XIcon />
              </div>
              <div className="shrink-0 w-4 h-4 flex items-center justify-center rounded-xl">
                <DribbleIcon />
              </div>
              <div className="shrink-0 w-4 h-4 flex items-center justify-center rounded-xl">
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="space-y-4 text-xs leading-relaxed">
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
