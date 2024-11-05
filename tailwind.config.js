/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  darkMode: 'class',
  content: [
    './layouts/**/*.html',
    './layouts/**/**/*.html',
    './layouts/**/**/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'hacking-slate': {
          DEFAULT: '#3f3d4c',
          light: '#5f5d6c',
          lighter: '#7f7d8c',
          dark: '#2f2d3c',
          darker: '#1f1d2c',
        },
        'hacking-dusk': {
          DEFAULT: '#322e46',
          light: '#524e66',
          lighter: '#726e86',
          dark: '#221e36',
          darker: '#120e26',
        },
        'hacking-plum': {
          DEFAULT: '#3c2f56',
          light: '#5c4f76',
          lighter: '#7c6f96',
          dark: '#2c1f46',
          darker: '#1c0f36',
        },
        'hacking-violet': {
          DEFAULT: '#4f2e99',
          light: '#6f4eb9',
          lighter: '#8f6ed9',
          dark: '#3f1e89',
          darker: '#2f0e79',
        },
        'hacking-midnight': {
          DEFAULT: '#342357',
          light: '#544377',
          lighter: '#746397',
          dark: '#241347',
          darker: '#140337',
        },
        'hacking-royal': {
          DEFAULT: '#442385',
          light: '#6443a5',
          lighter: '#8463c5',
          dark: '#341375',
          darker: '#240365',
        },
      },
    },
  },
  plugins: [
    // Tailwind Typography plugin
    require('@tailwindcss/typography'),
    // Iconify plugin, requires writing list of icon sets to load
    addDynamicIconSelectors(),
  ],
}
