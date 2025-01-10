/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'radial-gradient': 'radial-gradient(circle at 25% 30%,#43116A,#0A1832 25%, #000000)', }
    },
  },
  plugins: [],
}

