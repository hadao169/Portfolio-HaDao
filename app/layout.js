/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased leading-6 `}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
