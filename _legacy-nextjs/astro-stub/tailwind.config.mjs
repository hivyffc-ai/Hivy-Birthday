/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e0537d',   /* Romantic rose */
          light: '#f472b6',
          dark: '#be185d',
        },
        accent: '#f43f5e',      /* Deep rose/crimson */
        foreground: '#1c1917',
        muted: '#78716c',
        background: '#ffffff',
        surface: '#fafaf9',
        border: '#e7e5e4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
