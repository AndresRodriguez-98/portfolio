module.exports = {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Chakra Petch"],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

