"use client";
import { useState } from "react";

const ContactForm = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleNameChange = (e) => setInfo({ ...info, name: e.target.value });
  const handleEmailChange = (e) => setInfo({ ...info, email: e.target.value });
  const handleMessageChange = (e) =>
    setInfo({ ...info, message: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "5e92a25b-0edc-4b7e-8848-d62f4597fb4a",
        name: info.name,
        email: info.email,
        message: info.message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setResult(
        "✅ Your message was sent successfully! Thanks for contacting me."
      );
      setInfo({ name: "", email: "", message: "" });
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      setResult("❌ Something went wrong. Please try again.");
      setTimeout(() => {
        setResult("");
      }, 3000);
    }
  }

  return (
    <div className="flex items-center min-h-screen py-20">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-gray-800 p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-100">
              Contact me
            </h1>
            <p className="text-gray-400">
              If you have any inquiries, collaboration ideas, or simply want to
              connect, don't hesitate to contact me. I'm always open to new
              conversations!{" "}
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="mb-6 w-full">
                <input
                  onChange={handleNameChange}
                  value={info.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-3 py-2 h-8 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                />
              </div>

              <div className="mb-6 w-full">
                <input
                  onChange={handleEmailChange}
                  value={info.email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 h-8 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"
                />
              </div>

              <div className="mb-6 w-full">
                <textarea
                  onChange={handleMessageChange}
                  value={info.message}
                  rows="3"
                  name="message"
                  id="message"
                  placeholder="Leave a message here..."
                  required
                  className="w-full px-3 py-2 rounded-sm placeholder-gray-500 text-gray-900 bg-gray-100 text-sm focus:outline-none"></textarea>
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className=" bg-btn inline-block text-white no-underline hover:text-indigo-100 py-2 px-4 rounded-sm focus:outline-none cursor-pointer transition duration-300 ease-in-out hover:scale-105">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        {result && (
          <p
            className="text-base text-center text-green-400 px-4 py-2"
            id="result">
            {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
