/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inconsolata", "monospace"],
      },
      colors: {
        primary: "rgb(18 24 40 / <alpha-value>)",
      },
      backgroundImage: {
        nav: "linear-gradient(0deg, rgba(220,38,38,1) 0%, rgba(18,24,40,1) 100%)",
      },
      container: {
        padding: "15px",
        center: true,
      },
    },
  },
  plugins: [],
};
