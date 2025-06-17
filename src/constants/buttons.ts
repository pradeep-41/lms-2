// Button Sizes (now using Tailwind classes)
export const ButtonSize = {
  sm: {
    className: "py-2 px-3",
    textSize: "text-sm",
  },
  md: {
    className: "py-3 px-4",
    textSize: "text-base",
  },
  lg: {
    className: "py-4 px-6",
    textSize: "text-lg",
  },
} as const;

// Button Variants
export const ButtonVariant = {
  solid: "solid",
  outline: "outline",
  ghost: "ghost",
  link: "link",
} as const;

// Button Color Schemes
export const ButtonColorScheme = {
  primary: "primary",
  secondary: "secondary",
  danger: "danger",
  success: "success",
} as const;

// Button Style Mappings (using Tailwind classes)
export const ButtonStyles = {
  solid: {
    primary: {
      container: "bg-blue-500 border-0",
      text: "text-white",
    },
    secondary: {
      container: "bg-gray-500 border-0",
      text: "text-white",
    },
    danger: {
      container: "bg-red-500 border-0",
      text: "text-white",
    },
    success: {
      container: "bg-green-500 border-0",
      text: "text-white",
    },
  },
  outline: {
    primary: {
      container: "border border-blue-500 bg-transparent",
      text: "text-blue-500",
    },
    secondary: {
      container: "border border-gray-500 bg-transparent",
      text: "text-gray-500",
    },
    danger: {
      container: "border border-red-500 bg-transparent",
      text: "text-red-500",
    },
    success: {
      container: "border border-green-500 bg-transparent",
      text: "text-green-500",
    },
  },
  ghost: {
    primary: {
      container: "bg-transparent border-0",
      text: "text-blue-500",
    },
    secondary: {
      container: "bg-transparent border-0",
      text: "text-gray-500",
    },
    danger: {
      container: "bg-transparent border-0",
      text: "text-red-500",
    },
    success: {
      container: "bg-transparent border-0",
      text: "text-green-500",
    },
  },
  link: {
    primary: {
      container: "bg-transparent border-0",
      text: "text-blue-500 underline",
    },
    secondary: {
      container: "bg-transparent border-0",
      text: "text-gray-500 underline",
    },
    danger: {
      container: "bg-transparent border-0",
      text: "text-red-500 underline",
    },
    success: {
      container: "bg-transparent border-0",
      text: "text-green-500 underline",
    },
  },
} as const;

export type ButtonSizeKey = keyof typeof ButtonSize;
export type ButtonVariantKey = keyof typeof ButtonVariant;
export type ButtonColorSchemeKey = keyof typeof ButtonColorScheme;