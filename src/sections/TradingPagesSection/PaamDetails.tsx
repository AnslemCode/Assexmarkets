"use client";
import ImageWithTextSection from "@/components/pageComponents/ImageWithTextSection";
import React from "react";
import Image from "next/image";

const PaamDetails = () => {
  const handleOpen = () => {
    console.log("Open Account");
    // Navigate or trigger an action here
  };

  return (
    <section className="">
      <div className="max-w-6xl mx-auto">
        <ImageWithTextSection
          title={`Are you a Skillful Trader?\n Become a Fund Manager`}
          description="Your trading results are transparently displayed on our website, backed by robust manager security, full control over your account, and seamless automation that ensures all strategies and trade orders are accurately and instantly mirrored to your account for a reliable and hands-free trading experience."
          buttonText="Open PAAM Account"
          buttonOnClick={handleOpen}
          imageComponent={
            <Image
              src="/images/paam1.png"
              alt="Fund Manager"
              width={320}
              height={480}
              className="rounded-xl object-contain max-w-full h-auto"
              priority
            />
          }
        />

        <ImageWithTextSection
          title="Start investing in PAMM with ease — minimum deposit from just $250."
          description="Diversify your income sources, expand your investment portfolio across global markets, and maintain full control over your risk exposure with smart tools, flexible trading options, and a strategy tailored to your financial goals."
          buttonText="Open PAAM Account"
          buttonOnClick={handleOpen}
          imageOnLeft
          imageComponent={
            <Image
              src="/images/paam2.png"
              alt="Investor Interface"
              width={612}
              height={408}
              className="rounded-xl object-contain max-w-full h-auto"
              priority
            />
          }
        />

        <ImageWithTextSection
          title={`Get a Piece of the PAMM Pie \nBenefits for Partners and Managers`}
          description="At AssexMarkets, our PAAM system is built on strategic partnerships that drive shared success. Through this model, partners can maximize the value of their existing client base, turning relationships into lasting returns. At the same time, asset managers gain greater reach and exposure, connecting with a wider pool of investors who are ready to follow proven strategies."
          buttonText="Open PAAM Account"
          buttonOnClick={handleOpen}
          imageComponent={
            <Image
              src="/images/paam3.png"
              alt="Partners and Managers"
              width={232}
              height={235}
              className="rounded-xl object-contain max-w-full h-auto"
              priority
            />
          }
        />
      </div>
    </section>
  );
};

export default PaamDetails;
