/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#0B0B0B',
        'text-description': '#0b0b0bbf'
      },
    },

    fontFamily : {
      Inter: ['Inter', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

