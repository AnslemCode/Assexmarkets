"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-fit mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Trading Menu */}
        <MenuItem setActive={setActive} active={active} item="Trading">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-sm">
            <div className="badge-section">
              <div className="badge">Trading</div>
              <div className="flex flex-col space-y-2">
                <HoveredLink href="/live-account-trading">
                  Live Account Trading
                </HoveredLink>
                <HoveredLink href="/simulated-account-trading">
                  Simulated Account Trading
                </HoveredLink>
                <HoveredLink href="/copy-trading">Copy Trading</HoveredLink>
                <HoveredLink href="/trading-contest">
                  Trading Contest
                </HoveredLink>
                <HoveredLink href="/paam">
                  Percentage Allocation Asset Management (PAMM)
                </HoveredLink>
              </div>
            </div>
            <div className="badge-section">
              <div className="badge">Conditions</div>
              <div className="flex flex-col space-y-2">
                <HoveredLink href="/deposit-withdrawals">
                  Deposit and Withdrawals
                </HoveredLink>
                <HoveredLink href="/fees">Fees</HoveredLink>
                <HoveredLink href="/client-protection">
                  Client Protection
                </HoveredLink>
              </div>
            </div>
          </div>
        </MenuItem>

        {/* Markets Menu */}
        <MenuItem setActive={setActive} active={active} item="Markets">
          <div className="flex flex-col space-y-4 text-sm">
            <div className="badge-section">
              <div className="badge">Markets</div>
              <div className="flex flex-col space-y-2">
                <HoveredLink href="/forex-cfd">Forex CFD</HoveredLink>
                <HoveredLink href="/crypto-cfd">Crypto CFD</HoveredLink>
                <HoveredLink href="/indices">Indices</HoveredLink>
                <HoveredLink href="/metals">Metals</HoveredLink>
                <HoveredLink href="/commodities">Commodities</HoveredLink>
              </div>
            </div>
          </div>
        </MenuItem>

        {/* Platform Menu */}
        <MenuItem setActive={setActive} active={active} item="Platform">
          <div className="text-sm grid grid-cols-1 gap-10 p-4">
            <ProductItem
              title="MetaTrader5"
              href="/metatrader5"
              src="/images/MetaTraderMobile.png"
              description="Enjoy added features including depth of market, advanced trading tools and improved charting capabilities"
            />
            {/* <ProductItem
              title="MetaTrader4"
              href="/metatrader4"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Deposit & Withdrawals, Fees, Client Protection"
            /> */}
          </div>
        </MenuItem>

        {/* Account Types Menu */}
        <MenuItem setActive={setActive} active={active} item="Account Types">
          <div className="flex flex-col space-y-4 text-sm">
            <div className="badge-section">
              <div className="badge">Account Types</div>
              <div className="flex flex-col space-y-2">
                <HoveredLink href="/standard">Standard</HoveredLink>
                <HoveredLink href="/leverage-plus">Leverage Plus</HoveredLink>
                <HoveredLink href="/raw-spread">Raw Spread</HoveredLink>
              </div>
            </div>
          </div>
        </MenuItem>

        <Link
          href="/about-us"
          className="cursor-pointer text-white font-medium hover:opacity-[0.9]"
        >
          Company
        </Link>
        <Link
          href="/contact-us"
          className="cursor-pointer text-white font-medium hover:opacity-[0.9]"
        >
          Contact Us
        </Link>

        {/* Additional Menu Items */}
        {/* <MenuItem setActive={setActive} active={active} item="Company">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about-us">About Us</HoveredLink>
            <HoveredLink href="/careers">Careers</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact-us">Contact Form</HoveredLink>
            <HoveredLink href="/support">Support</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}
