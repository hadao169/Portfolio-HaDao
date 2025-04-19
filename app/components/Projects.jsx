import myWorks from "../../assets/myWork.js";

const Projects = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center gap-6 p-4">
      <h1 className="text-3xl font-semibold text-center md:text-left">
        My Latest Work
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        {myWorks.map((work, index) => (
          <div
            key={index}
            className="flex flex-col items-start duration-300 ease-in-out">
            <img
              key={index}
              src="/images/portfolio.png"
              alt={work.name}
              className="project-img w-full h-50 rounded-lg shadow-lg mb-2 box-border cursor-pointer transition-transform duration-300 ease-in-out object-cover"
            />
            <a
              href={work.link}
              className="text-xl font-semibold hover:text-amber-400 transition duration-300 ease-in-out">
              {work.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
