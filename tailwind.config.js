export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        infinite_scroll: {
          '100%': { transform: 'translateX(calc(-50% + 0.25rem))' },
        },
      },
      animation: {
        infinite_scroll: 'infinite_scroll 10s linear infinite',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
};
