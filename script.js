tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#004ac6",
        "secondary": "#712ae2",
        "background": "#f7f9fb",
        "on-primary": "#ffffff",
        "on-surface": "#191c1e"
        // podés copiar TODOS los colores acá si querés completo
      },
      fontFamily: {
        "headline": ["Manrope"],
        "body": ["Inter"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      }
    }
  }
}