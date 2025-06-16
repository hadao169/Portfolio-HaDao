"use client";
import myWorks from "@/app/assets/myWork.js";
import { techClassName } from "@/app/assets/techStack.js";
import { useState, useEffect } from "react";

const Projects = () => {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsMd(window.innerWidth < 768); // Tailwind md
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return (
    <div
      id="projects"
      className="w-full flex flex-col items-start gap-6 p-4 scroll-mt-25">
      <h1 className="text-4xl font-semibold self-center md:text-left mb-4">
        My Latest Work
      </h1>
      <div className="flex flex-col gap-x-4">
        {myWorks.map((work, index) => (
          <div
            key={index}
            className={`${
              isMd && "project-img"
            } w-full flex flex-col md:flex-row md:gap-6 pb-4 duration-300 ease-in-out`}>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <img
                src={work.image}
                alt={work.name}
                className={`${
                  !isMd ? "project-img rounded-lg" : "rounded-t-lg"
                } w-full md:w-80 h-full shadow-lg mb-2 box-border cursor-pointer transition-transform duration-300 ease-in-out object-cover`}
              />
            </a>
            <div className="flex flex-col items-start w-full md:w-3/5 gap-2 px-4">
              <h1 className="text-xl font-bold">{work.name}</h1>
              <p className="">{work.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {work.techs.map((tech, index) => (
                  <div key={index} className={`${techClassName} opacity-90`}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
