/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased leading-6">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <GoogleAnalytics gaID={process.env.NEXT_PUBLIC_GA_ID} />
        <Analytics />
      </body>
    </html>
  );
}
