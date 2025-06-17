// src/components/typography/Text.tsx

import React from "react";
import { Text as RNText, TextStyle, useColorScheme } from "react-native";
import {
  FontSize,
  FontWeight,
  FontFamily,
  LineHeight,
  LetterSpacing,
  TextColor,
  FontSizeKey,
  FontWeightKey,
  FontFamilyKey,
  LetterSpacingKey,
  TextColorKey,
} from "../../constants/typography";
import { TypographyVariant, typographyVariants } from "./typographyVariants";
import { ThemeColors } from '../../styles/theme';

interface Props extends React.ComponentProps<typeof RNText> {
  variant?: TypographyVariant;
  size?: FontSizeKey;
  weight?: FontWeightKey;
  family?: FontFamilyKey;
  color?: TextColorKey;
  letterSpacing?: LetterSpacingKey;
  lineHeight?: number;
  align?: "auto" | "left" | "right" | "center" | "justify";
  style?: TextStyle;
}

export const Text = ({
  variant,
  size,
  weight,
  family,
  color,
  letterSpacing = "normal",
  lineHeight,
  align = "left",
  style,
  children,
  ...rest
}: Props) => {
  const scheme = useColorScheme();
  const themeColors = ThemeColors[scheme || "light"];

  const resolved = variant ? typographyVariants[variant] : undefined;

  const finalSize = FontSize[size || resolved?.size || "body"];
  const finalWeight = FontWeight[weight || resolved?.weight || "regular"];
  const finalFamily = FontFamily[family || resolved?.family || "sans"];
  const finalLineHeight = lineHeight ?? LineHeight[size || resolved?.size || "body"];
  const finalColor = themeColors[TextColor[color || resolved?.color || "primary"]];
  const finalLetterSpacing = LetterSpacing[letterSpacing];

  return (
    <RNText
      style={[
        {
          fontSize: finalSize,
          fontWeight: finalWeight as TextStyle["fontWeight"],
          fontFamily: finalFamily,
          lineHeight: finalLineHeight,
          letterSpacing: finalLetterSpacing,
          color: finalColor,
          textAlign: align,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};
