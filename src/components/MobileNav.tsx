// "use client";

// import React, { useState } from "react";
// import { cn } from "@/lib/utils";
// import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";

// export function MobileNavbar({
//   showMobileMenu,
//   closeMenu,
// }: {
//   showMobileMenu: boolean;
//   closeMenu: () => void;
// }) {
//   const [active, setActive] = useState<string | null>(null);

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50 z-40"
//         onClick={closeMenu}
//       ></div>

//       {/* Slide-in Mobile Menu */}
//       <div
//         className={cn(
//           "fixed top-0 right-0 w-[80%] h-full bg-white shadow-lg z-50 transition-transform transform",
//           showMobileMenu ? "translate-x-0" : "translate-x-full"
//         )}
//         style={{ transition: "transform 0.3s ease" }}
//       >
//         <div className="flex justify-end p-4">
//           <button onClick={closeMenu} className="text-[#0DAE94]">
//             X
//           </button>
//         </div>

//         <Menu setActive={setActive}>
//           {/* Trading Menu */}
//           <MenuItem setActive={setActive} active={active} item="Trading">
//             <div className="flex flex-col space-y-4 p-4 text-sm">
//               <HoveredLink href="/live-account-trading">
//                 Live Account Trading
//               </HoveredLink>
//               <HoveredLink href="/simulated-account-trading">
//                 Simulated Account Trading
//               </HoveredLink>
//               <HoveredLink href="/copy-trading">Copy Trading</HoveredLink>
//               <HoveredLink href="/trading-contest">Trading Contest</HoveredLink>
//               <HoveredLink href="/paam">PAMM</HoveredLink>
//             </div>
//           </MenuItem>

//           {/* Markets Menu */}
//           <MenuItem setActive={setActive} active={active} item="Markets">
//             <div className="flex flex-col space-y-4 p-4 text-sm">
//               <HoveredLink href="/forex-cfd">Forex CFD</HoveredLink>
//               <HoveredLink href="/crypto-cfd">Crypto CFD</HoveredLink>
//               <HoveredLink href="/indices">Indices</HoveredLink>
//               <HoveredLink href="/metals">Metals</HoveredLink>
//               <HoveredLink href="/commodities">Commodities</HoveredLink>
//             </div>
//           </MenuItem>

//           {/* Account Types Menu */}
//           <MenuItem setActive={setActive} active={active} item="Account Types">
//             <div className="flex flex-col space-y-4 p-4 text-sm">
//               <HoveredLink href="/standard">Standard</HoveredLink>
//               <HoveredLink href="/leverage-plus">Leverage Plus</HoveredLink>
//               <HoveredLink href="/raw-spread">Raw Spread</HoveredLink>
//             </div>
//           </MenuItem>

//           {/* Additional Menu Items */}
//           <MenuItem setActive={setActive} active={active} item="Company">
//             <div className="flex flex-col space-y-4 p-4 text-sm">
//               <HoveredLink href="/about-us">About Us</HoveredLink>
//               <HoveredLink href="/careers">Careers</HoveredLink>
//             </div>
//           </MenuItem>

//           <MenuItem setActive={setActive} active={active} item="Contact Us">
//             <div className="flex flex-col space-y-4 p-4 text-sm">
//               <HoveredLink href="/contact-form">Contact Form</HoveredLink>
//               <HoveredLink href="/support">Support</HoveredLink>
//             </div>
//           </MenuItem>
//         </Menu>
//       </div>
//     </>
//   );
// }
