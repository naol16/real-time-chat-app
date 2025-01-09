/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'radial-gradient': 'radial-gradient(circle at center, #1A1A1A, #333333, #000000)', }
    },
  },
  plugins: [],
}

