/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "540Screen": "540px",

      "440Screen": "440px",

      "340Screen": "340px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "1920Screen": "1920px",

      "2048Screen": "2048px",
    },
  },
  plugins: [],
}
