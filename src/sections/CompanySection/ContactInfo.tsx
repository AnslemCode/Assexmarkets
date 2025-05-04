import React from "react";
import Badge from "@/components/Badge";

const ContactInfo = () => {
  return (
    <section className="bg-stone-100 px-4 md:px-8">
      <div className="max-w-7xl mx-auto py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-6 max-w-[530px] text-center lg:text-left mx-auto lg:mx-0">
            <Badge text="Contact Info" />
            <p className="font-secondary text-2xl lg:text-[32px] font-bold text-[#0dae94] leading-snug">
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
  <div className="space-y-4 text-center sm:text-left text-[#1f0d3f] max-w-xs">
    <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
    <div className="h-[3px] w-7 bg-[#1f0d3f] mx-auto sm:mx-0" />
    <p className={`text-base sm:text-lg ${isEmail ? "underline" : ""}`}>
      {contact}
    </p>
    <p className="text-sm sm:text-base text-gray-600">{note}</p>
  </div>
);
