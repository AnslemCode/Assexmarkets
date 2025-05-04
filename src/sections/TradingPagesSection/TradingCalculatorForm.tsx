"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { WhiteFlameButtonIcon } from "../../../public/icons/ButtonIcons";
import { ChevronDown } from "lucide-react";

const SelectField = ({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) => (
  <div className="relative w-full max-w-md mx-auto">
    <select
      id={name}
      name={name}
      defaultValue=""
      required
      className="peer w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0dae94] focus:outline-none bg-white text-sm md:text-base appearance-none"
    >
      <option value="" disabled hidden>
        Select {label}
      </option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>

    {/* Chevron Icon */}
    <ChevronDown
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      size={18}
    />

    <label
      htmlFor={name}
      className="absolute left-4 top-0 -translate-y-1/2 text-sm px-1 bg-white transition-all 
          peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0dae94]
          peer-valid:top-0 peer-valid:text-sm peer-valid:text-[#0dae94]"
    >
      {label}
    </label>
  </div>
);

const InputField = ({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) => (
  <div className="relative w-full max-w-md mx-auto">
    <input
      id={name}
      name={name}
      type={type}
      required
      placeholder=" "
      className="peer w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0dae94] focus:outline-none bg-white text-sm md:text-base"
    />
    <label
      htmlFor={name}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-gray-400 bg-white px-1 transition-all
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
    peer-focus:top-0 peer-focus:-translate-y-1 peer-focus:text-sm peer-focus:text-[#0dae94]
    peer:not(:placeholder-shown):top-0 peer:not(:placeholder-shown):-translate-y-1 peer:not(:placeholder-shown):text-sm peer:not(:placeholder-shown):text-[#0dae94]"
    >
      {label}
    </label>
  </div>
);

const TradingCalculatorForm = () => {
  return (
    <section className="px-4 py-16">
      <div className="max-w-4xl mx-auto bg-[#1DA1F2]/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 space-y-10 border border-stone-100"
        >
          <div className="text-center">
            <h2 className="font-secondary text-2xl sm:text-[32px] font-bold text-[#1f0d3f]">
              Trading Calculator
            </h2>
            <p className="font-secondary mt-2 text-[#0dae94] text-base sm:text-lg">
              Calculate your trade setup with ease
            </p>
          </div>

          <form className="space-y-6">
            <SelectField
              label="Account Type"
              name="accountType"
              options={["Standard", "ECN", "Raw Spread"]}
            />

            <SelectField
              label="Account Currency"
              name="accountCurrency"
              options={["USD", "EUR", "GBP", "NGN"]}
            />

            <SelectField
              label="Instrument"
              name="instrument"
              options={["XAUUSDm", "EURUSD", "GBPJPY", "BTCUSD"]}
            />

            <InputField label="Lot Size" name="lot" type="number" />

            <SelectField
              label="Leverage"
              name="leverage"
              options={["1:50", "1:100", "1:200", "1:500"]}
            />

            <div className="text-center pt-4">
              <Button
                icon={<WhiteFlameButtonIcon />}
                text="Calculate"
                variant="primary"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingCalculatorForm;
