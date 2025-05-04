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
    // href: "/live-account-trading",
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
      {
        id: 5,
        href: "/paam",
        text: "Percentage Allocation Asset Management (PAMM)",
        dropdown: false,
      },
      {
        id: 6,
        href: "/deposit-and-withdrawals",
        text: "Deposit and Withdrawals",
        dropdown: false,
      },
      {
        id: 7,
        href: "/fees",
        text: "Fees",
        dropdown: false,
      },
      {
        id: 8,
        href: "/client-protection",
        text: "Client Protection",
        dropdown: false,
      },
    ],
  },
  {
    id: 2,
    // href: "/forex-cfd",
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
    // href: "",
    text: "Platform",
    dropdown: true,
    dropdownLinks: [
      { id: 1, href: "/metatrader5", text: "MetaTrader5", dropdown: false },
    ],
  },
  {
    id: 4,
    // href: "/forex-cfd",
    text: "Account Types",
    dropdown: true,
    dropdownLinks: [
      { id: 1, href: "/standard", text: "Standard", dropdown: false },
      { id: 2, href: "/leverage-plus", text: "Leverage Plus", dropdown: false },
      { id: 3, href: "/raw-spread", text: "Raw Spread", dropdown: false },
    ],
  },
  // {
  // id: 5,
  // href: "/about-us",
  // text: "Company",
  // dropdown: false,
  // dropdownLinks: [
  //   { id: 1, href: "/about-us", text: "About Us", dropdown: false },
  //   { id: 2, href: "/careers", text: "Careers", dropdown: false },
  // ],
  // },
  // {
  // id: 6,
  // href: "/contact-form",
  // text: "Contact Us",
  // dropdown: false,
  // dropdownLinks: [
  //   { id: 1, href: "/contact-form", text: "Contact Form", dropdown: false },
  //   { id: 2, href: "/support", text: "Support", dropdown: false },
  // ],
  // },
];

const staticLinks = [
  { href: "/about-us", text: "Company" },
  { href: "/contact-us", text: "Contact Us" },
];

export { testimonials, navigationLinks, staticLinks };
