import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Include the app directory for new app router
    './pages/**/*.{js,ts,jsx,tsx}', // Include pages directory for older pages-based routing
    './components/**/*.{js,ts,jsx,tsx}', // Include components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
