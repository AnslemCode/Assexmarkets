const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review: "Assexmarkets is the best forex broker platform",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review: "Reliable and transparent broker with great trading conditions.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "I’ve been trading with Assexmarkets for several months now, and I’m impressed by their fast execution speeds and tight spreads. The platform is user-friendly.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "As a new trader, I found Assexmarkets very welcoming. The registration process was quick, and the demo account helped me practice before going live.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Fast execution and excellent customer support—highly recommend Assexmarkets!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review: "Good customer support and stable platform make trading easy.",
    imgPath: "/images/client6.png",
  },
];

const navigationLinks = [
  {
    id: 1,
    href: "/live-account-trading",
    text: "Trading",
    dropdown: true,
    dropdownLinks: [
      {
        id: 1,
        href: "/live-account-trading",
        text: "Live Account Trading",
        dropdown: false,
      },
      {
        id: 2,
        href: "/simulated-account-trading",
        text: "Simulated Account Trading",
        dropdown: false,
      },
      { id: 3, href: "/copy-trading", text: "Copy Trading", dropdown: false },
      {
        id: 4,
        href: "/trading-contest",
        text: "Trading Contest",
        dropdown: false,
      },
      { id: 5, href: "/paam", text: "PAMM", dropdown: false },
    ],
  },
  {
    id: 2,
    href: "/forex-cfd",
    text: "Markets",
    dropdown: true,
    dropdownLinks: [
      { id: 1, href: "/forex-cfd", text: "Forex CFD", dropdown: false },
      { id: 2, href: "/crypto-cfd", text: "Crypto CFD", dropdown: false },
      { id: 3, href: "/indices", text: "Indices", dropdown: false },
      { id: 4, href: "/metals", text: "Metals", dropdown: false },
      { id: 5, href: "/commodities", text: "Commodities", dropdown: false },
    ],
  },
  {
    id: 3,
    href: "/about-us",
    text: "Company",
    dropdown: true,
    dropdownLinks: [
      { id: 1, href: "/about-us", text: "About Us", dropdown: false },
      { id: 2, href: "/careers", text: "Careers", dropdown: false },
    ],
  },
  {
    id: 4,
    href: "/contact-form",
    text: "Contact Us",
    dropdown: true,
    dropdownLinks: [
      { id: 1, href: "/contact-form", text: "Contact Form", dropdown: false },
      { id: 2, href: "/support", text: "Support", dropdown: false },
    ],
  },
];

export { testimonials, navigationLinks };
