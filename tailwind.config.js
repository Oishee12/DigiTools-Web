/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
          light: '#8B5CF6',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        digitools: {
          primary: '#7C3AED',
          secondary: '#9333EA',
          accent: '#8B5CF6',
          neutral: '#1F2937',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#16A34A',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
