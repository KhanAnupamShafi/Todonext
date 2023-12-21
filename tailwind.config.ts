import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: { xxs: '10px' },
      colors: {
        'hot-pink': '#ff7594',
        'orange-peach': '#FF7C65',
        dark: '#2E1619',
        'type-1': '#646F75',
        'type-2': '#2E1619',
        'type-3': '#8A8686',
        'type-4': '#E0E0E0',
        'type-5': '#03922B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'check-mark': "url('/images/vector.svg')",
      },
      screens: {
        small: '389px',

        medium: '833px',

        large: '1511px',
      },
      animation: {
        wiggle: 'wiggle .4s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      boxShadow: {
        custom: '0px 2px 5px 0px rgba(0, 0, 0, 0.20);',
        customTwo: '0px 3.174px 3.967px 0px rgba(0, 0, 0, 0.20);',
      },
    },
  },
  plugins: [],
};
export default config;
