export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skyblue': '#0079FF',
        'secondary': '#3C4048',
      },
    },
    screens: {
      'sm-tablet': '640px',
      'md-tablet': '720px',
      'big-tablet': '780px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}