// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      backgroundImage: {
        btn: "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
      },
    },
  },
  plugins: [],
};
