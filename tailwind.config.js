/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      textColor: {
        "bti-green": "#4B9741",
      },
      backgroundColor: {
        "bti-grey": "#f0ede5",
        "bti-yellow": "#F09506",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
