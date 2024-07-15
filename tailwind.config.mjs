/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {},
      borderWidth: {
        1: "1px",
        0.5: "0.5px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
