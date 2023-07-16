/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A1D2CE", // Light Turquoise
        secondary: "#78CAD2", // Medium Turquoise
        accent: "#FF6B6B", // Accent Red
        light: "#333333", // Light Background
        dark: "#5E6472", // Dark Text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.dark"),
            a: {
              color: theme("colors.accent"),
              "&:hover": {
                color: theme("colors.accent"),
              },
            },
          },
        },
      }),
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
