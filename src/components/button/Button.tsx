import React from "react";
import { Pressable, PressableProps } from "react-native";
import {
  ButtonSize,
  ButtonStyles,
  ButtonSizeKey,
  ButtonVariantKey,
  ButtonColorSchemeKey,
} from "@/src/constants/buttons";
import { Text } from "../typography/Text";

interface ButtonProps extends PressableProps {
  variant?: ButtonVariantKey;
  colorScheme?: ButtonColorSchemeKey;
  size?: ButtonSizeKey;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  children: string;
  className?: string;
} 

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  colorScheme = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  isDisabled = false,
  isLoading = false,
  children,
  className = "",
  ...rest
}) => {
  const sizeConfig = ButtonSize[size];
  const variantStyle = ButtonStyles[variant][colorScheme];

  return (
    <Pressable
      disabled={isDisabled || isLoading}
      className={`
        rounded-lg items-center justify-center flex-row
        ${sizeConfig.className}
        ${variantStyle.container}
        ${isDisabled ? "opacity-50" : "active:opacity-80"}
        ${className}
      `}
      {...rest}
    >
      {leftIcon && <>{leftIcon}</>}
      <Text
        weight="bold"
        className={`
          ${sizeConfig.textSize}
          ${variantStyle.text}
          ${leftIcon ? "ml-2" : ""}
          ${rightIcon ? "mr-2" : ""}
        `}
      >
        {isLoading ? "Loading..." : children}
      </Text>
      {rightIcon && <>{rightIcon}</>}
    </Pressable>
  );
};