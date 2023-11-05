/* eslint-disable no-undef */

export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
       'gbg': "url('./public/img/gbg.webp')",
      },  
      colors: {
        "black":"#121212",
        // "blue":"#7cd2ed" 
      },
    }
  },
  plugins: [
]
}
