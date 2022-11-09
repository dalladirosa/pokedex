/** @type {import('tailwindcss').Config} */

const ELEMENTS = [
  'undefined',
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
]

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#333333',
        grey: 'rgb(241 245 249)',
        elm: Object.fromEntries(
          ELEMENTS.map((current) => [current, `var(--elm-${current})`])
        ),
      },

      gridTemplateColumns: {
        main: 'auto 13rem minmax(0, 65rem) auto',
      },
    },
  },
  plugins: [],
  safelist: [...ELEMENTS.map((elm) => `bg-elm-${elm}`)],
}
