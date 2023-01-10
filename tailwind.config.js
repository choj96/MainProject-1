/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slider: {
          "0%": {
            transform: "translateX(35%)",
          },
          "100%": {
            transform: "translateX(65%)",
          },
        },
      },
      animation: {
        slider: "slider 5s linear infinite",
      },
    },
    plugins: [],
  },
};
