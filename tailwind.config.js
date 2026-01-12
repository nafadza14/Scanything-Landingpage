/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E91E63', // Skincare Pink
        secondary: '#FF9800', // Food Orange
        'pure-black': '#000000',
        'pure-white': '#FFFFFF',
        'off-white': '#F8F9FA',
        'text-main': '#0F172A',
        'text-muted': '#64748B'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'premium': '0 40px 100px -20px rgba(0, 0, 0, 0.08)',
        'floating': '0 50px 100px -20px rgba(0, 0, 0, 0.2)',
        'pink-glow': '0 20px 50px -10px rgba(233, 30, 99, 0.5)',
        'orange-glow': '0 20px 40px -10px rgba(255, 152, 0, 0.3)',
        'white-glow': '0 30px 60px -15px rgba(255, 255, 255, 0.4)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4.5rem',
      }
    }
  },
  plugins: [],
}