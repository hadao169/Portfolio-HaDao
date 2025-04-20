"use client";
import { use, useEffect, useState } from "react";
// Components
import Navbar from "./components/Navbar";
import Header from "./components/sections/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificate";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div>
      {/* Navbar and Header */}
      <div>
        <Navbar />
        <Header />
      </div>

      {/* Main Content */}
      <div className="main w-full flex flex-col lg:flex-row lg:px-[8%]">
        {/* Left Section - About + Projects */}
        <div className="left-section flex flex-col lg:w-2/3 items-start justify-start gap-10 py-20 xl:pl-25 px-6 z-30  ">
          <About />
          <Projects />
          <Certificates />
        </div>

        {/* Right Section - Tech Stack + Education */}
        <div className="right-section hidden lg:flex flex-col w-full lg:w-1/3 items-start px-4 md:px-6 py-10 gap-10 z-30">
          <TechStack />
          <Education />
        </div>
      </div>
      <Footer />
    </div>
  );
}
