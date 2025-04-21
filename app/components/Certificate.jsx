import certificates from "../assets/certificate";

const Certificates = () => {
  return (
    <div
      id="certificates"
      className="w-full flex flex-col items-start gap-6 p-4 scroll-mt-25">
      <h1 className="text-4xl font-semibold self-center md:text-left mb-4">
        Personal Certificates
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-4/5 mx-auto lg:mx-0 lg:w-full">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:items-start gap-4 mb-4">
            <img
              src={certificate.img}
              className="h-50 w-80 rounded-2xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            />
            <div className="flex items-center gap-2 transition-all duration-300 ease-in-out">
              <a
                href={certificate.link}
                className="text-xl font-bold hover:text-blue-500 duration-300">
                {certificate.name}
              </a>
              <i className="bx bx-left-arrow-alt">Click there</i>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://www.linkedin.com/in/ha-dao-a60a13297/"
        target="_blank"
        className="self-center font-semibold md:text-left mb-4 px-4 py-2 bg-btn text-white rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 md:text-[15px] cursor-pointer">
        View more
      </a>
    </div>
  );
};

export default Certificates;
