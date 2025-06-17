
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [ "./src/**/*.{js,jsx,ts,tsx}",   "./src/app/index.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#007AFF',
        }, 
        gray: {
          500: '#6C757D',
        }, 
        red: {
          500: '#DC3545',
        }, 
        green: {
          500: '#28A745',
        }, 
      }
    },
  },
  plugins: [],
}