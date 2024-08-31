// /** @type {import('tailwindcss').Config} */
// module.exports = {important: true
// ,
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
      },
    },
  },
  plugins: [],
};
