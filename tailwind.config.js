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

      "240Screen": "240px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "1920Screen": "1920px",

      "2048Screen": "2048px",

      "375Screen": "375px",

      "412Screen": "412px",

      "390Screen": "390px",

      "820Screen": "820px",
    },
    fontFamily: {
      Poppins: "Poppins",
      serif: "sans-serif",
      roboto: "Roboto",
      mono: "monospace",
    },
  },
  plugins: [],
}
