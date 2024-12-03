/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inconsolata", "monospace"],
        signature: ["Dancing Script", "cursive"],
      },
      colors: {
        primary: "rgb(18 24 40 / <alpha-value>)",
        secondary: "rgb(161 34 39/ <alpha-value>)", // red
      },
      backgroundImage: {
        nav: "linear-gradient(0deg, rgba(161,34,39,1) 0%, rgba(115,31,39,1) 25%, rgba(80,28,39,1) 75%, rgba(18,24,40,1) 100%)",
      },
      container: {
        padding: "15px",
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      size: {
        81: "20.25rem",
        112: "32rem",
        113: "32.25rem",
      },
      boxShadow: {
        item: "-1px -1px 10px 5px rgba(161, 34, 39, 1)", // colors.secondary
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
