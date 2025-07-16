import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001F3F',
        accent: '#FFD700'
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config
