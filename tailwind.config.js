
import tailwindcss from '@tailwindcss/vite'
module.exports = {
    content: [
       "./index.html",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    theme: {
      extend: {
        colors: {
             
        },
        fontFamily: {
          heading: ["'Playfair Display'", "serif"], // For classy headings
          body: ["'Poppins'", "sans-serif"],        // For clean body text
        },
     
      },
    },
    plugins: [
    ],
  };
  