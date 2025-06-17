// src/components/typography/colors.ts

export const TextColor = {
  primary: "textPrimary",
  secondary: "textSecondary",
  caption: "textCaption",
  error: "textError",
  success: "textSuccess",
  warning: "textWarning",
  accent: "textAccent",

  blue: "textBlue",
  black: "textBlack",
  white: "textWhite",
  gray: "textGray",
  green: "textGreen",
  yellow: "textYellow",
} as const;

export type TextColorKey = keyof typeof TextColor;
