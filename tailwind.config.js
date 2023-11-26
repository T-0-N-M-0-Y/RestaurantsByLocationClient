/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0099d2",

          "secondary": "#7c9700",

          "accent": "#0097c9",

          "neutral": "#102333",

          "base-100": "#eefff0",

          "info": "#0092a4",

          "success": "#7fef00",

          "warning": "#9e7a00",

          "error": "#ff5863",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}

