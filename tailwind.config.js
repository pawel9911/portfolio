/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inconsolata", "monospace"],
      },
      backgroundColor: {
        primary: "#121828",
      },
      textColor: {
        primary: "#fff",
      },
    },
  },
  plugins: [],
};
