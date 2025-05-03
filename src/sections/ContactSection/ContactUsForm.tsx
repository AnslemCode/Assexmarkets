"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MessageCircle } from "lucide-react";
import Button from "@/components/Button";
import { WhiteFlameButtonIcon } from "../../../public/icons/ButtonIcons";

const InputField = ({
  label,
  icon: Icon,
  type,
  name,
}: {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  type: string;
  name: string;
}) => (
  <div className="relative w-full">
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    <input
      id={name}
      name={name}
      type={type}
      placeholder=" "
      className="peer w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0dae94] focus:outline-none bg-white text-sm md:text-base"
    />
    <label
      htmlFor={name}
      className="absolute left-10 top-1/2 -translate-y-1/2 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0dae94] bg-white px-1"
    >
      {label}
    </label>
  </div>
);

const ContactUsForm = () => {
  return (
    <section className="px-4 py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 space-y-10 border border-stone-100"
        >
          <div className="text-center">
            <h2 className="font-secondary text-2xl sm:text-3xl font-bold text-[#1f0d3f]">
              Contact Us
            </h2>
            <p className="font-secondary mt-2 text-[#0dae94] text-base sm:text-lg">
              We’d love to hear from you
            </p>
          </div>

          <form className="space-y-6">
            {/* Inputs Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <InputField label="Name" icon={User} type="text" name="name" />
              <InputField label="Email" icon={Mail} type="email" name="email" />
              <InputField
                label="Phone Number"
                icon={Phone}
                type="tel"
                name="phone"
              />
            </div>

            {/* Message Field */}
            <div className="relative w-full">
              <MessageCircle className="absolute left-3 top-4 text-gray-400" />
              <textarea
                id="message"
                name="message"
                placeholder=" "
                rows={5}
                className="peer w-full pl-10 pr-4 pt-4 pb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0dae94] focus:outline-none resize-none text-sm md:text-base"
              />
              <label
                htmlFor="message"
                className="absolute left-10 top-4 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#0dae94] bg-white px-1"
              >
                Message
              </label>
            </div>

            {/* Button */}
            <div className="text-center">
              <Button
                icon={<WhiteFlameButtonIcon />}
                text="Leave us a message"
                variant="primary"
                // fullWidth
              />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsForm;
