// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#6871F4',
//         default: '#86909C',
//         danger: '#F53F3F',
//         warning: '#FF7D00',
//       },
//     },
//   },
//   plugins: [],
// }

import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkText: '#E4E6EB',
        dark: '#121212',
        light: '#fafafa',
        primary: '#6871F4',
        default: '#86909C',
        danger: '#F53F3F',
        warning: '#FF7D00',
      },
    },
  },
  plugins: [],
}
export default config
