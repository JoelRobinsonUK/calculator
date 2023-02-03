/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            saffron: '#f48847',
            steel: '#282d30',
            cotton: '#fee6e4'
        },
        fontFamily: {
            sans: ['Source Sans Pro', 'sans-serif'],
            serif: ['Zilla Slab', 'serif'],
        }
    }
},
  plugins: [],
}
