"use client";
import contactLinks from "@/app/assets/contactLink";

const Footer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5e92a25b-0edc-4b7e-8848-d62f4597fb4a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      console.log("Success! Data:");
      alert("Thank you! I will get back to you soon.");
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };
  return (
    <footer
      id="contact"
      className="flex items-center justify-around gap-4 px-5 lg:px-[6%] xl:px[12%] py-8 bg-zinc-900 flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center gap-2 text-white">
        <h1 className="text-color text-[32px] font-semibold">Ha Dao</h1>
        <div className="w-auto flex items-center gap-2 text-[16px]">
          <i className="bx bxs-envelope"></i>
          <p>ThaiHa.Dao@seamk.fi</p>
        </div>
      </div>

      <form className="flex gap-2" onSubmit={onSubmit}>
        <div className="flex px-2 py-2 border-2 border-gray-400 rounded-2xl transition duration-400 gap-4">
          <input
            placeholder="Enter your email"
            type="email"
            className="w-45 px-0.5 outline-none"
            name="email"
          />
          <button
            type="submit"
            className="bg-btn px-3 py-1 outline-none rounded-lg transition duration-300 cursor-pointer hover:opacity-80">
            Submit
          </button>
        </div>
      </form>

      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-4 text-[24px]">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              className="social-icon"
              href={link.link}
              target="_blank">
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <p className="text-lg">© 2025 Ha Dao</p>
      </div>
    </footer>
  );
};

export default Footer;
