import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import SplashScreen from "@/components/SplashScreen";

/* Runs before first paint: once this session has seen the splash, the card is
   hidden by CSS rather than by React, so a second page load never flashes
   white before the effect gets a chance to run. */
const SPLASH_GUARD = `try{if(sessionStorage.getItem("aaruvo-splash-seen"))document.documentElement.classList.add("splash-done")}catch(e){}`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AARUVO — tell us what you need, we get it done",
  description:
    "AARUVO helps you find, buy and finish everyday things. Talk or type what you need, we find it in shops near you, and we stay with you until the job is done.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SPLASH_GUARD }} />
      </head>
      <body className="antialiased">
        <SplashScreen />
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
