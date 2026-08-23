/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#08090d",
        surface: "#0e1017",
        "surface-border": "#1b1f2e",
        cyan: {
          400: "#38bdf8",
          500: "#0ea5e9",
        },
        emerald: {
          400: "#34d399",
          500: "#10b981",
        },
        indigo: {
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 35px rgba(99, 102, 241, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
