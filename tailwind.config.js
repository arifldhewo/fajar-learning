/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundColor: {
      "orange-logo": "#e85f10",
      "white-button": "#ffffff",
      "blue-logo": "#79b3d6",
      "slate-button": "#f1f5f9",
    },
    outlineColor: {
      "orange-logo": "#e85f10",
      "white-button": "#ffffff",
      "blue-logo": "#79b3d6",
      "slate-button": "#f1f5f9",
    },
  },
  plugins: [],
};
