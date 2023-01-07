/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      dt: "1100px",
      tb: "930px",
      stb: "630px",
      mb: "375px",
    },
    extend: {
      boxShadow: {
        "3xl": "0 5px 12px 0 rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        pop: ["Poppins"],
        osans: ["Open Sans"],
      },
      colors: {
        Pink: "hsl(322, 100%, 66%)",
        LightPink: "hsl(321, 100%, 78%)",
        LightRed: "hsl(0, 100%, 63%)",
        grey: "hsl(208, 11%, 55%)",

        VeryDarkCyan: "hsl(192, 100%, 9%)",
        VeryPaleBlue: "hsl(207, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
