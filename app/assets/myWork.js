import next from "next";

const myWorks = [
  {
    name: "My Portfolio",
    image: "/images/portfolio.png",
    link: "https://github.com/hadao169/Portfolio-HaDao",
    description:
      "Discover my skills, and projects all in one place. This portfolio showcases my journey, creativity, and passion through real-world examples and experiences.",
    techs: ["Next.js", "tailwindcss", "Vercel"],
  },
  {
    name: "E-commerce App",
    image: "/images/e-commerce.png", // Make sure this image exists in your public/images folder
    link: "https://e-commerce-app-roan.vercel.app/",
    description:
      "A modern full-stack e-commerce application with a clean, responsive UI and robust backend services. Features product browsing, search, authentication, cart management, and secure checkout.",
    techs: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Shadcn UI",
      "Node.js",
      "Express",
      "JWT",
      "Passport.js",
      "MongoDB",
      "Mongoose",
      "Vercel",
      "Render",
    ],
  },
  {
    name: "Phonebook",
    image: "/images/phonebook.png",
    link: "https://github.com/hadao169/phonebook-fullstack",
    description:
      "A fullstack phonebook app with ReactJS and NodeJS to save and manage your contacts.",
    techs: [
      "React.js",
      "Node.js",
      "Render",
      "MongoDB",
      "Express.js",
      "Mongoose",
    ],
  },
  {
    name: "CountryInfoHub",
    image: "/images/country.png",
    link: "https://github.com/hadao169/Country-project",
    description:
      "A simple webapp with ReactJS to get some basic information about any country in the world.",
    techs: ["React.js", "Render", "Rest-api"],
  },
  {
    name: "Blog App",
    image: "/images/blog.png",
    link: "https://github.com/hadao169/Blog_project",
    description:
      "A blog is an online website where individuals regularly publish written content in the form of posts or articles.",
    techs: [
      "React.js",
      "Node.js",
      "Render",
      "MongoDB",
      "Express.js",
      "Mongoose",
    ],
  },
];

export default myWorks;
