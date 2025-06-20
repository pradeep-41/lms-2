import React from "react";
import { Text } from "../typography/Text";
import { View, TouchableOpacity } from "react-native";

type CardProps = {
  title: string;
  buttonLabels?: string[];
  onPress?: () => void;
};

const DashboardCard = ({ title, buttonLabels = [], onPress }: CardProps) => {
  return (
    <TouchableOpacity  activeOpacity={0.9} onPress={onPress} disabled={!onPress}>
      <View
        className="border border-gray-300 bg-white my-1 p-4 rounded-lg"
      >
        <Text variant="button" className="mb-3 text-gray-800 font-semibold">
          {title}
        </Text>
        
        {buttonLabels.length > 0 && (
          <View className="flex-row flex-wrap justify-center">
            {buttonLabels.map((label, index) => (
              <View 
                key={index}
                className={`border ${
                  index % 3 === 0 
                    ? 'border-blue-500 bg-blue-50' 
                    : index % 2 === 0 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-purple-500 bg-purple-50'
                } px-3 py-1.5 m-1 rounded-full`}
              >
                <Text 
                  variant="small" 
                  className={
                    index % 3 === 0 
                      ? 'text-blue-700' 
                      : index % 2 === 0 
                        ? 'text-green-700' 
                        : 'text-purple-700'
                  }
                >
                  {label}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default DashboardCard;