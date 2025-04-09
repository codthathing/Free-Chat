/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#F5F5F5",
          medium: "#666666",
          dark: "#333333",
        },
      },
      borderColor: {
        "gray-light": "#E0E0E0"
      },
    },
  },
  plugins: [],
};