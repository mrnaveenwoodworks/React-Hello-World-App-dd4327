/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4da6ff",
          DEFAULT: "#3b82f6",
          dark: "#1e40af",
        },
        secondary: {
          light: "#a78bfa",
          DEFAULT: "#8b5cf6",
          dark: "#6d28d9",
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif"
        ],
        mono: [
          "source-code-pro",
          "Menlo",
          "Monaco",
          "Consolas",
          "Courier New",
          "monospace"
        ]
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      }
    },
  },
  plugins: [],
  darkMode: "class"
};
