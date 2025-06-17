import React from "react";
import { Box } from "../Box";
import { Text } from "../typography/Text";
import { View } from "react-native";

type CardProps = {
  title: string;
  buttonLabels?: string[];
};

const DashboardCard = ({ title, buttonLabels = [] }: CardProps) => {
  return (
    <Box
      variant="center"
      className="border border-gray-400 my-2 mx-3 p-3 rounded-lg">
      <Text variant="button" className="mb-2">
        {title}
      </Text>
      <View className="flex-row flex-wrap justify-center">
        {buttonLabels.map((label, index) => (
          <Text
            key={index}
            variant="small"
            className="border border-gray-500 px-3 py-1 m-1 rounded">
            {label}
          </Text>
        ))}
      </View>
    </Box>
  );
};

export default DashboardCard;
