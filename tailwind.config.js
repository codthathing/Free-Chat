/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
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
        "gray-light": "#E0E0E0",
      },
      fontSize: {
        "[8px]": "0.5rem",
      },
      borderWidth: {
        "0.5px": "0.5px",
      },
      gap: {
        "0.15px": "0.15px",
      },
      boxShadow: {
        inset: "0 0 0px 1000px #F5F5F5 inset",
      },
    },
  },
  plugins: [],
};
