/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#011936",
        accent1: "#465362",
        accent2: "#82A3A1", 
        accent3: "#9FC490",
        accent4: "#C0DFA1",
      }
    },
  },
  plugins: [],
}
