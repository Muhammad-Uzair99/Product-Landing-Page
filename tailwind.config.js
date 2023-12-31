/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text': {
          50: '#fbf8ea',
          100: '#f6f2d5',
          200: '#ede4ab',
          300: '#e4d781',
          400: '#dbca57',
          500: '#d2bc2d',
          600: '#a89724',
          700: '#7e711b',
          800: '#544b12',
          900: '#2a2609',
          950: '#151304',
        },
        'background': {
          50: '#fbf8ea',
          100: '#f6f2d5',
          200: '#ede4ab',
          300: '#e4d781',
          400: '#dbca57',
          500: '#d2bc2d',
          600: '#a89724',
          700: '#7e711b',
          800: '#544b12',
          900: '#2a2609',
          950: '#151304',
        },
        'primary': {
          50: '#fffce5',
          100: '#fff8cc',
          200: '#fff199',
          300: '#ffeb66',
          400: '#ffe433',
          500: '#ffdd00',
          600: '#ccb100',
          700: '#998500',
          800: '#665800',
          900: '#332c00',
          950: '#1a1600',
        },
        'secondary': {
          50: '#fbf9ea',
          100: '#f7f2d4',
          200: '#eee5aa',
          300: '#e6d87f',
          400: '#ddcb55',
          500: '#d5be2a',
          600: '#aa9822',
          700: '#807219',
          800: '#554c11',
          900: '#2b2608',
          950: '#151304',
        },
        'accent': {
          50: '#fbf9ea',
          100: '#f7f2d4',
          200: '#eee5aa',
          300: '#e6d87f',
          400: '#ddcb55',
          500: '#d5be2a',
          600: '#aa9822',
          700: '#807219',
          800: '#554c11',
          900: '#2b2608',
          950: '#151304',
        },
       },
       
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

