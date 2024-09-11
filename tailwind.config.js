/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/menu/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "twitter":"twitterchirp"
      },
      colors:{
        "textcolor":"#D9D9D9"
      }
    },
  },
  plugins: [],
}

