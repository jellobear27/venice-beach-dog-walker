import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'venice-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'venice-sand': {
          50: '#fdf6f3',
          100: '#fbe8e1',
          200: '#f7d0c3',
          300: '#f2b2a1',
          400: '#ec8d7a',
          500: '#e46b54',
          600: '#d04f3a',
          700: '#ad3d2c',
          800: '#8f3427',
          900: '#772f24',
        },
        'sunset': {
          orange: '#FF6B35',
          pink: '#FF4D6D',
          purple: '#845EC2',
          yellow: '#FFD93D',
          coral: '#FF8C42',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      animation: {
        'gradient-flow': 'gradient-flow 8s ease infinite',
      },
    },
  },
  plugins: [],
};

export default config; 