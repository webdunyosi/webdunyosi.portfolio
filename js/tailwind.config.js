tailwind.config = {
  theme: {
    extend: {
      colors: {
        lime: {
          400: "#a3e635",
          500: "#84cc16",
        },
      },
      animation: {
        "gradient-move": "move-gradient 10s linear infinite",
      },
      keyframes: {
        "move-gradient": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
    },
  },
}
