"use client";
import { ReactNode } from "react";
import { CardSpotlight } from "./ui/card-spotlight";

interface CardData {
  review: string;
  // Add any other properties you need from `card`
}

interface GlowCardProps {
  card: CardData;
  index: number;
  children?: ReactNode;
}

const GlowCard: React.FC<GlowCardProps> = ({ card, children }) => {
  return (
    <CardSpotlight
      className="timeline-card card-border rounded-xl p-6 mb-8 break-inside-avoid-column bg-white"
      color="#0dae94"
      radius={300}
    >
      {children}
      <div className="mt-4">
        <p className="text-black text-lg">{card.review}</p>
      </div>
    </CardSpotlight>
  );
};

export default GlowCard;
