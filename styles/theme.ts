export const theme = {
  colors: {
    text: "#48494E",
    background: "#FFFFFF",
    brand: {
      primary: "#FF733B",
      fourth: "#57F2D0",
    },
    gray200: "#d0d0d0",
    white: "#FFFFFF",
    mainGray: "#090F32",
    primaryGray: "#F3F7F8",
  },
  fonts: {
    body: "Outfit, system-ui, sans-serif",
    heading: "Outfit, system-ui, sans-serif",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export type Theme = typeof theme;
