import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { MenuContextProvider } from "@/context/MobileMenuContext";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable",
});

const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Assex Markets",
  description: "Trading platform for Assex Markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${spaceGroteskFont.variable} antialiased`}
      >
        <MenuContextProvider>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </MenuContextProvider>
      </body>
    </html>
  );
}
