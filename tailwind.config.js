module.exports = {
  content: [
    './**/*.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#E6F7EF',
          200: '#B3E7CC',
          300: '#80D7A9',
          400: '#4DC787',
          500: '#2DB573',
          600: '#24925D',
          700: '#1C7047',
          800: '#134E31',
          900: '#0A2C1B',
        },
        // primary: {
        //   100: '#ffefe6',
        //   200: '#ffcfb3',
        //   300: '#feb080',
        //   400: '#feb080',
        //   500: '#fe701b',
        //   600: '#e45701',
        //   700: '#b24401',
        //   800: '#7f3001',
        //   900: '#4c1d00',
        // },
        primary: {
          100: '#E6F7EF',
          200: '#B3E7CC',
          300: '#80D7A9',
          400: '#4DC787',
          500: '#2DB573',
          600: '#24925D',
          700: '#1C7047',
          800: '#134E31',
          900: '#0A2C1B',
        }
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'architects-daughter': ['"Architects Daughter"', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        full: '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        10: '2.5rem',
      },
      scale: {
        98: '.98',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
  ],
};
