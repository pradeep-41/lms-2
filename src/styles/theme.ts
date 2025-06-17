// src/constants/theme.ts

export const ThemeColors = {
  light: {
    textPrimary: "#1A1A1A",
    textSecondary: "#4A4A4A",
    textCaption: "#6B6B6B",
    textError: "#D32F2F",
    textSuccess: "#388E3C",
    textWarning: "#F57C00",
    textAccent: "#2962FF",
    textBlue: "#2962FF",
    textBlack: "#000000",
    textWhite: "#FFFFFF",
    textGray: "#808080",
    textGreen: "#2E7D32",
    textYellow: "#FBC02D",
  },
  dark: {
    textPrimary: "#FFFFFF",
    textSecondary: "#E0E0E0",
    textCaption: "#9E9E9E",
    textError: "#EF5350",
    textSuccess: "#66BB6A",
    textWarning: "#FFA726",
    textAccent: "#448AFF",
    textBlue: "#448AFF",
    textBlack: "#FFFFFF", // use white in dark theme
    textWhite: "#000000", // invert for visibility
    textGray: "#B0B0B0",
    textGreen: "#81C784",
    textYellow: "#FFEE58",
  },
} as const;
