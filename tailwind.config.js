/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0f1d',
          surface: '#10172a',
          surfaceHover: '#17223b',
          card: '#11192e',
          border: '#1e293b',
          borderSubtle: '#19243c',
          text: '#f1f5f9',
          muted: '#94a3b8',
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          surfaceHover: '#f1f5f9',
          card: '#ffffff',
          border: '#e2e8f0',
          borderSubtle: '#edf2f7',
          text: '#0f172a',
          muted: '#64748b',
        },
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        accent: {
          purple: '#8b5cf6',
          indigo: '#6366f1',
          teal: '#14b8a6',
          cyan: '#06b6d4',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(6, 182, 212, 0.15)',
        'glow-md': '0 0 25px rgba(6, 182, 212, 0.25)',
        'glow-lg': '0 0 35px rgba(6, 182, 212, 0.35)',
        'glow-purple': '0 0 25px rgba(139, 92, 246, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
