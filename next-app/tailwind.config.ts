/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      lineHeight: {
        "extra-loose": "25",
        "super-tight": "1.2",
      },
      colors: {
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          70: "#021639",
        },
        yellow: {
          50: "#FEC601",
        },
      },
      backgroundImage: {
        "bg-img-1":
          "url('https://img.freepik.com/free-vector/modern-bathroom-interior-design-realistic-mockup_1441-2800.jpg?t=st=1720564827~exp=1720568427~hmac=f62d63023fb8dfc8267f62b1db0409823e3422dcb231e79ac02ca1a4348bab63&w=1380')",
        "bg-img-2":
          "url('https://img.freepik.com/free-photo/3d-rendering-white-minimal-kitchen-with-wood-decoration_105762-2210.jpg?t=st=1720565166~exp=1720568766~hmac=abcedd9f2c25d87fdb0ef5bff6ee84cf5322ea4dcf0a29beb3867fa8838aa56d&w=996')",
        "bg-img-3":
          "url('https://cdn.pixabay.com/photo/2020/01/20/10/33/room-4779953_960_720.jpg')",

        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/pattern-bg.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
