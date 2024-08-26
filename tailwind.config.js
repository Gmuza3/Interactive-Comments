/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        blue: "#1e40af",
        gray: "#52525b",
        nameBlack: "#09090b",
        hoverGray: "#a1a1aa",
        white: "#fff",
      },
      screens: {
        "mobile-max": { max: "390px" },
        "ss-max": { max: "490px" },
        "sm-max": { max: "680px" },
        "md-max": { max: "860px" },
        "lg-max": { max: "1024px" },
        "lgx-max": { max: "1080px" },
        "xl-max": { max: "1280px" },
        "2xl-max": { max: "1536px" },
        "xxl-max": { max: "1800px" },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".w-calc": {
            width: "calc(100% - 2rem)",
          },
          ".h-calc": {
            top: "calc(100vh - 50px)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
