/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1D9BF0",
        "neutral-50": "#F9F9F9",
        "neutral-700": "#404040",
        "neutral-1000": "#000000",
        "button-stroke": "#546A7A",
    },
    fontFamily: {
      "inter": ['Inter', 'sans-serif']
    },
    lineHeight: {
      "normal": "normal"
    },
    borderRadius: {
      "border-65": "65px"
    },
    boxShadow: {
      "box-shadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.25)"
    },
    backdropBlur: {
      "23": "blur(23.668209075927734px)"
    },
    width: {
      "390": "398px",
      "868" : "868px"
    }
  },
  plugins: [],
  }
}