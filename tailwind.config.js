/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        grayText: "var(--grayText)",
        blueText: "var(--blueBg)",
        pinkText: "var(--pinkColor)",
      },
      backgroundColor: {
        blueBg: "var(--blueBg)",
        pinkBg: "var(--pinkColor)",
        grayBg: "var(--grayText)",
      },
      borderColor: {
        blueBorder: "var(--blueBorder)",
        pinkBorder: "var(--pinkColor)",
      },
      screens: {
        zeroScreen: "0px",
        navSm: "1160px",
      },
    },
  },
  plugins: [],
};
