/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#242C32",
          secondary: "#AE26CE",
          accent: "#4F8DC2",
          info: "#1E222C",
        },
      },
      "light",
    ],
  },
  plugins: [daisyui],
};
