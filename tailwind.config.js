/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background hero
        'gradient-start': '#E0EAFE', 
        'gradient-end': '#F9E5FF',   

        // Tombol See My Work
        'gradient-start-btn': '#7755FF', 
        'gradient-end-btn': '#FF54B0',   

        // Tombol Contact Me
        'primary-purple': '#A76CFA',  

        // Teks
        'text-gray': '#6B6B83',      
        'heading-dark': '#1E1E2F',   
      },
    },
  },
  plugins: [],
}
