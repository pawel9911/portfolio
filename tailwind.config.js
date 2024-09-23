/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inconsolata", "monospace"],
      },
      textColor: {
        primary: "#fff",
      },
      colors: {
        primary: "rgb(18 24 40 / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
