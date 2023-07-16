/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A202C",
        secondary: "#2D3748",
        accent: "#38B2AC",
        light: "#F7FAFC",
        dark: "#171923",
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
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
