// src/constants/typography.ts
export const FontSize = {
  tiny: 10,          // Tiny footnotes
  caption: 12,       // Captions
  small: 14,         // Small text / hints
  body: 16,          // Body text
  subtitle: 18,      // Subtitle
  title: 20,         // Title small
  h6: 22,            // H6 header
  h5: 24,            // H5 header
  h4: 28,            // H4 header
  h3: 32,            // H3 header
  h2: 40,            // H2 header
  h1: 48,            // H1 header
} as const;

export type FontSizeKey = keyof typeof FontSize;

export const FontWeight = {
  thin: "100",
  light: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
  black: "900",
} as const;

export type FontWeightKey = keyof typeof FontWeight;

export const FontFamily = {
  system: "System",
  sans: "Inter",
  serif: "Georgia",
  mono: "Courier New",
} as const;

export type FontFamilyKey = keyof typeof FontFamily;

export const LineHeight = {
  tiny: 12,
  caption: 16,
  small: 20,
  body: 24,
  subtitle: 28,
  title: 32,
  h6: 28,
  h5: 32,
  h4: 36,
  h3: 40,
  h2: 44,
  h1: 52,
} as const;

export const LetterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
} as const;

export type LetterSpacingKey = keyof typeof LetterSpacing;

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
