import { techStacks, techClassName } from "../assets/techStack";

const About = () => {
  return (
    <div id="about" className="w-full flex flex-col gap-6 scroll-mt-25">
      {/* About Section */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between px-4 gap-10 pb-10 z-50">
        <img
          src="/images/about.png"
          alt="About"
          className="w-60 h-60 md:h-88 rounded-full md:rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        <div className="flex flex-col items-center md:items-start gap-4 text-white w-full z-20">
          <h1 className="text-4xl font-semibold text-center md:text-left">
            About Me
          </h1>
          <p className="text-[16px] md:text-[18px] text-center md:text-left">
            I'm an ambitious engineering student with a strong interest in
            software development. I enjoy solving problems and learning new
            technologies. I'm excited to keep growing and contribute to
            meaningful projects in the software field.
          </p>
          <p className="text-[16px] md:text-[18px] text-center md:text-left">
            I’m looking for internship or trainee opportunities where I can
            learn from experienced developers and grow my coding skills while
            applying my engineering background.
          </p>

          <a
            href="/CV_HaDao_SE.pdf"
            className="w-38 px-4 py-[10px] bg-btn text-white rounded-2xl hover:bg-amber-400 hover:opacity-80 transition-transform duration-300 hover:scale-105 inline-flex items-center gap-2 text-[16px] md:text-[18px]"
            download="CV_HaDao_SoftwareEngineer">
            My resume <i className="bx bx-download text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Tech Stack for Mobile */}
      <div className="lg:hidden w-full rounded-2xl p-4 shadow-2xl">
        <h2 className="text-xl font-bold text-amber-400 tracking-wide mb-4 border-b-[3px] border-amber-400 pb-1 w-fit">
          Tools I Use
        </h2>
        <ul className="flex flex-wrap justify-start gap-2">
          {techStacks.map((tech, index) => (
            <li key={index} className={techClassName}>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons (Uncomment if needed) */}
      {/* 
      <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start mt-6 text-sm font-semibold">
        <a
          href="#project"
          className="px-4 py-3 bg-amber-600 text-white rounded-2xl hover:bg-amber-400 transition-transform duration-300 ease-in-out hover:scale-105 text-xs md:text-sm"
        >
          View my projects
        </a>
        <a
          href="/Ha_Dao_Resume.pdf"
          download
          className="px-4 py-[10px] bg-gray-600 text-white rounded-2xl hover:bg-amber-400 transition-transform duration-300 hover:scale-105 inline-flex items-center gap-2 text-xs md:text-sm"
        >
          My resume <i className="bx bx-download text-2xl"></i>
        </a>
      </div>
      */}
    </div>
  );
};

export default About;
