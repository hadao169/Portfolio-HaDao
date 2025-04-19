import Navbar from "./components/Navbar";
import Header from "./components/sections/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Education from "./components/Education";

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Navbar and Header */}
      <div>
        <Navbar/>
        <Header />
      </div>

      {/* Main Content */}
      <div className="main w-full flex flex-col lg:flex-row lg:px-[8%]">
        {/* Left Section - About + Projects */}
        <div className="left-section flex flex-col w-full lg:w-2/3 items-start justify-start gap-10 py-10 pl-10 pr-6 md:pl-15 z-30">
          <About />
          <Projects />
        </div>

        {/* Right Section - Tech Stack + Education */}
        <div className="right-section hidden lg:flex flex-col w-full lg:w-1/3 items-start px-4 md:px-6 py-10 gap-10 z-30">
          <TechStack />
          <Education />
        </div>
      </div>
    </div>
  );
}
