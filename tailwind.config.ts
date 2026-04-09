import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'context-card-border': 'var(--context-card-border)',
        'red-800': 'var(--ds-red-800)',
        'red-900': 'var(--ds-red-900)',
        'amber-800': 'var(--ds-amber-800)',
        'amber-850': 'var(--ds-amber-850)',
        'gray-100': 'var(--ds-gray-100)',
        'gray-400': 'var(--ds-gray-400)',
        'gray-700': 'var(--ds-gray-700)',
        'gray-1000': 'var(--ds-gray-1000)',
        'gray-1000-h': 'var(--ds-gray-1000-h)',
        'gray-alpha-200': 'var(--ds-gray-alpha-200)',
        'gray-alpha-400': 'var(--ds-gray-alpha-400)',
        'background-100': 'var(--ds-background-100)',
      },
      boxShadow: {
        'focus-ring': 'var(--ds-focus-ring)',
        'border-small': 'var(--ds-shadow-border)',
      },
      animation: {
        'fade-spin': 'fadeSpin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      },
      keyframes: {
        fadeSpin: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
