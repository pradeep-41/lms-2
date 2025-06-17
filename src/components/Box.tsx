import React from "react";
import { View, ViewProps } from "react-native";

type Variant = "center" | "row" | "column" | "card";

interface BoxProps extends ViewProps {
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  center: "flex justify-center items-center",
  row: "flex-row justify-start items-center",
  column: "flex-col justify-start items-start",
  card: "p-4 bg-gray-400 dark:bg-gray-800 rounded-lg shadow",
};

export const Box: React.FC<BoxProps> = ({
  variant,
  className,
  style,
  children,
  ...rest
}) => {
  const baseClass = variant ? variantClasses[variant] : "";
  return (
    <View
      className={[baseClass, className].filter(Boolean).join(" ")}
      style={style}
      {...rest}>
      {children}
    </View>
  );
};
