module.exports = {
  mode: `jit`,
  content: [`./src/pages/**/*.{js,ts,jsx,tsx}`, `./src/components/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      screens: {
        xs: `512px`,
        '3xl': `1792px`,
      },
      fontFamily: {
        sans: `Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
      colors: {
        primary: `#39b4e9`,
        light: `#FAFCFE`,
        input: `#F2F7FB`,
      },
      ringWidth: [`hover`, `active`],
    },
  },
}
