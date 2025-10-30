/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        primaryLight: '#7CB3F0',
        primaryDark: '#357ABD',
        calm: '#4CAF50',
        scattered: '#E53935',
        textPrimary: '#2C3E50',
        textSecondary: '#7F8C8D',
        background: '#FFFFFF',
        backgroundSecondary: '#F5F7FA',
      },
    },
  },
  plugins: [],
}
