/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        lime: "#bbd934",
        aqua: "#1fbfac",
        orange: "#ff7518",
        green: "#16d113",
        darkgreen: "#0b8909",
        darkred: "#d12613",
        darkorange: "#d17b13",
        darkblue: "#138ed1",
        lightorange: "#ffd6ba",
        gray: "#d9d9d9",
        foreground: "#666666",
        inactive: "#b8b9b8"
      },
    },
  },
  plugins: [],
};

export default config;
