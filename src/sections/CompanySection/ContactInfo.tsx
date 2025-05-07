import React from "react";
import Badge from "@/components/Badge";

const ContactInfo = () => {
  return (
    <section className="section-padding bg-stone-100">
      <div className="max-w-7xl mx-auto py-10 md:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-4 lg:space-y-6 max-w-[530px] text-center lg:text-left mx-auto lg:mx-0">
            <Badge text="Contact Info" />
            <p className="font-secondary text-base sm:text-xl md:text-2xl lg:text-[32px] font-bold text-[#0dae94] leading-snug">
              We are always happy to assist you
            </p>
          </div>

          {/* Right Contact Details */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-10 sm:gap-14">
            {/** Email Block */}
            <ContactBlock
              title="Email Address"
              contact="support@assexmarkets.com"
              note="Assistance hours: Monday - Friday, 6 AM to 8 PM WAT"
              isEmail
            />

            {/* Vertical Divider (desktop only) */}
            <div className="hidden sm:block w-px bg-gray-300 opacity-30 h-24" />

            {/** Phone Block */}
            <ContactBlock
              title="Phone Number"
              contact="+234 7069664193"
              note="Assistance hours: Monday - Friday, 6 AM to 8 PM WAT"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

type ContactBlockProps = {
  title: string;
  contact: string;
  note: string;
  isEmail?: boolean;
};

const ContactBlock = ({ title, contact, note, isEmail }: ContactBlockProps) => (
  <div className="space-y-4 text-left text-[#1f0d3f] max-w-xs">
    <h3 className="text-sm sm:text-base md:text-lg font-semibold">{title}</h3>
    <div className="h-[3px] w-7 bg-[#1f0d3f] mx-0" />
    <p
      className={`text-sm sm:text-base md:text-lg ${
        isEmail ? "underline" : ""
      }`}
    >
      {contact}
    </p>
    <p className="text-xs sm:text-sm">{note}</p>
  </div>
);
