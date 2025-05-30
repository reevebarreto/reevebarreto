/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0A192F",
        light: "#8892B0",
        primary: "#FF6464",
        white: "#CCD6F6",
        light_dark: "#233554",
        dark_light: "#112240",
      },
      fontFamily: {
        code: ["Fira Code", "monospace"],
      },
      screens: {
        xs: { max: "639px" },
      },
    },
  },
  plugins: [],
};
