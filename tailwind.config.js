/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        lightBlue: "#eff7fa",
        missionColor: "#5F4D69",
        lightPurple: "#f4f1ff",
        visionColor: "#19395C",
        lightGreen: "#f7fff6"
      },
      fontFamily: {
        'nunito': ['nunito'],
      }
    },
  },
  plugins: [require("daisyui")],
}
