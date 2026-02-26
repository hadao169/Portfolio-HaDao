"use client";
// Components
import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/features/Projects";
import Education from "@/components/features/Education";
import Certificates from "@/components/features/Certificate";
import WorkExperience from "@/components/features/WorkExperience";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <div className="main w-full flex flex-col lg:flex-row lg:px-[8%]">
        {/* Left Section - About + Projects */}
        <div className="left-section flex flex-col lg:w-2/3 items-start justify-start gap-10 py-20 xl:pl-25 px-6 z-30">
          <About />
          <WorkExperience/>
          <Projects />
          <Certificates />
        </div>
        {/* Right Section - Tech Stack + Education */}
        <div className="right-section hidden lg:flex flex-col w-full lg:w-1/3 items-start px-4 md:px-6 py-20 gap-10 z-30">
          <TechStack />
          <Education />
        </div>
      </div>
    </div>
  );
}
