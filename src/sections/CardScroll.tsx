"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card";
import React from "react";

export function CardScrollSection() {
  return (
    <section className="my-30 relative overflow-hidden">
      <InfiniteMovingCards items={cardItems} direction="left" speed="slow" />
    </section>
  );
}
const cardItems = [
  {
    logo: "/icons/cards/card1.svg",
    name: "XAU/USD",
    badge: "Gold vs USDollar",
    price: "$0.9944",
    trend: "+1.34%",
    trendImage: "/icons/cards/chart1.svg",
  },
  {
    logo: "/icons/cards/card2.svg",
    name: "USOil",
    badge: "Crude Oil - WTI",
    price: "$63.404",
    trend: "-1.54%",
    trendImage: "/icons/cards/chart3.svg",
  },
  {
    logo: "/icons/cards/card3.svg",
    name: "US30",
    badge: "Dow Jones Index",
    price: "$28,934.50",
    trend: "+0.78%",
    trendImage: "/icons/cards/chart2.svg",
  },
  {
    logo: "/icons/cards/card4.svg",
    name: "NASDAQ",
    badge: "US Tech Index",
    price: "$28,934.50",
    trend: "+0.78%",
    trendImage: "/icons/cards/chart3.svg",
  },
  {
    logo: "/icons/cards/card1.svg",
    name: "XAU/USDx",
    badge: "Gold vs USDollar",
    price: "$0.9944",
    trend: "+1.34%",
    trendImage: "/icons/cards/chart1.svg",
  },
];
// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];
