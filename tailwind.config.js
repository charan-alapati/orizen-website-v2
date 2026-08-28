/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0a0f1d',
          'navy-light': '#0f172a',
          'navy-card': '#15213b',
          'navy-border': '#1e293b',
          blue: '#1e3a8a',
          'blue-bright': '#2563eb',
          'blue-glow': '#3b82f6',
          'blue-subtle': '#eff6ff',
          orange: '#f97316',
          'orange-bright': '#fb923c',
          'orange-dark': '#ea580c',
          teal: '#14b8a6',
          emerald: '#10b981',
          'slate-bg': '#f8fafc',
          'slate-card': '#f1f5f9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(249, 115, 22, 0.4)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.4)',
        'card-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
