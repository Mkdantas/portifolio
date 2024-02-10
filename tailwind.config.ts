import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      blue: {
        DEFAULT: '#60afff',
        100: '#002346',
        200: '#00468d',
        300: '#006ad3',
        400: '#1b8dff',
        500: '#60afff',
        600: '#81c0ff',
        700: '#a0d0ff',
        800: '#c0dfff',
        900: '#dfefff',
      },
      aquamarine: {
        DEFAULT: '#b5fed9',
        100: '#01552b',
        200: '#03ab57',
        300: '#09fb82',
        400: '#5efdad',
        500: '#b5fed9',
        600: '#c3fee0',
        700: '#d2fee8',
        800: '#e1fff0',
        900: '#f0fff7',
      },
      sapphire: {
        DEFAULT: '#0353a4',
        100: '#011121',
        200: '#012242',
        300: '#023263',
        400: '#034384',
        500: '#0353a4',
        600: '#0576e8',
        700: '#3698fb',
        800: '#79bbfc',
        900: '#bcddfe',
      },
      night: {
        DEFAULT: '#00120b',
        100: '#000403',
        200: '#000805',
        300: '#000c08',
        400: '#00100a',
        500: '#00120b',
        600: '#007649',
        700: '#00d885',
        800: '#3bffb4',
        900: '#9dffd9',
      },
      cambridge: {
        DEFAULT: '#98cbb4',
        100: '#182f25',
        200: '#305f4a',
        300: '#488e6f',
        400: '#6ab493',
        500: '#98cbb4',
        600: '#aed6c4',
        700: '#c2e0d3',
        800: '#d6eae1',
        900: '#ebf5f0',
      },
      white:{
        DEFAULT: '#fff'
      }
    },
  },
  plugins: [],
};
export default config;
