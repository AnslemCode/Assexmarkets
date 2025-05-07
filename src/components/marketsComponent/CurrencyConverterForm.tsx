"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CurrencyField = ({
  label,
  value,
  symbol,
}: {
  label: string;
  value: number;
  symbol: string;
}) => (
  <div className="relative w-full max-w-md mx-auto">
    <input
      type="text"
      readOnly
      value={`${symbol}${value.toLocaleString(undefined, {
        maximumFractionDigits: 6,
      })}`}
      className="peer w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm md:text-base text-gray-600"
    />
    <label className="absolute left-4 top-0 -translate-y-1/2 text-sm px-1 bg-white text-gray-500">
      {label}
    </label>
  </div>
);

type CurrencyCode = "USD" | "EUR" | "GBP" | "JPY" | "BTC" | "XAU";

const CurrencyConverterForm = () => {
  const [amount, setAmount] = useState<number | "">("");

  const currencies: { code: CurrencyCode; symbol: string }[] = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "GBP", symbol: "£" },
    { code: "JPY", symbol: "¥" },
    { code: "BTC", symbol: "₿" },
    { code: "XAU", symbol: "🪙" },
  ];

  // Static exchange rates from USD
  const rates: Record<CurrencyCode, number> = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.8,
    JPY: 156.74,
    BTC: 0.000015,
    XAU: 0.00049,
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") return setAmount("");
    const num = parseFloat(value);
    if (!isNaN(num)) setAmount(num);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl shadow-xl p-6 sm:p-12 bg-[#1DA1F2]/2 space-y-10 border border-gray-100"
      >
        <div className="text-center">
          <h2 className="font-secondary text-2xl sm:text-[32px] font-bold text-[#1f0d3f]">
            Currency Converter
          </h2>
          <p className="font-secondary mt-2 text-[#0dae94] text-base sm:text-lg">
            Convert USD to other currencies
          </p>
        </div>

        <form className="space-y-6">
          <div className="relative w-full max-w-md mx-auto">
            <input
              id="usd"
              name="usd"
              type="number"
              value={amount}
              onChange={handleAmountChange}
              required
              placeholder="Enter amount in USD"
              className="peer w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0dae94] focus:outline-none bg-white text-sm md:text-base"
            />
            <label
              htmlFor="usd"
              className={`absolute left-4 px-1 bg-white text-sm text-gray-500 transition-all
    ${
      amount === ""
        ? "top-1/2 -translate-y-1/2 text-base"
        : "top-0 -translate-y-1/2 text-sm text-[#0dae94]"
    }`}
            >
              Amount (USD)
            </label>
          </div>

          <motion.div
            key={amount}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {currencies.map(({ code, symbol }) => (
              <CurrencyField
                key={code}
                label={code}
                value={amount !== "" ? amount * (rates[code] ?? 0) : 0}
                symbol={symbol}
              />
            ))}
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default CurrencyConverterForm;
