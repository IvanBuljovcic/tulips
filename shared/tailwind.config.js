const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      rotate: {
        '135': '135deg',
      },
      colors: {
        primary: colors.indigo,
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ],
  variants: {
    extend: {
      translate: ['active'],
    },
  },
};
