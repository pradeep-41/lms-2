
export const typographyVariants = {
  h1: { size: "h1", weight: "bold", family: "sans", color: "primary" },
  h2: { size: "h2", weight: "bold", family: "sans", color: "primary" },
  h3: { size: "h3", weight: "semiBold", family: "sans", color: "primary" },
  h4: { size: "h4", weight: "semiBold", family: "sans", color: "primary" },
  h5: { size: "h5", weight: "medium", family: "sans", color: "primary" },
  h6: { size: "h6", weight: "medium", family: "sans", color: "primary" },
  title: { size: "title", weight: "medium", family: "sans", color: "primary" },
  subtitle: { size: "subtitle", weight: "regular", family: "sans", color: "secondary" },
  body: { size: "body", weight: "regular", family: "sans", color: "primary" },
  small: { size: "small", weight: "regular", family: "sans", color: "secondary" },
  caption: { size: "caption", weight: "regular", family: "sans", color: "caption" },
  tiny: { size: "tiny", weight: "regular", family: "sans", color: "caption" },
  button: { size: "body", weight: "bold", family: "sans", color: "accent" },
} as const;

export type TypographyVariant = keyof typeof typographyVariants;
