import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { Ionicons } from "@expo/vector-icons";
import { policies } from '../../utils/policies';

type PolicyValue = string | string[] | PolicySectionContent;
interface PolicySectionContent {
  [key: string]: PolicyValue;
}
interface Policies {
  [sectionTitle: string]: PolicySectionContent;
}

export const PoliciesScreen: React.FC = () => {
  const [activeSections, setActiveSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionTitle: string) => {
    setActiveSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  return (
    <ScrollView className="p-4 bg-white">
      {Object.entries(policies as Policies).map(([sectionTitle, sectionContent]) => {
        const isActive = activeSections[sectionTitle];
        return (
          <View key={sectionTitle} className="mb-3 rounded-2xl border border-gray-300 overflow-hidden">
            <TouchableOpacity
              className={`flex-row justify-between items-center p-4 ${
                isActive ? "bg-blue-100" : "bg-gray-100"
              }`}
              onPress={() => toggleSection(sectionTitle)}
            >
              <Text className="text-lg font-bold">{formatTitle(sectionTitle)}</Text>
              <Ionicons
                name={isActive ? "chevron-up-outline" : "chevron-down-outline"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
            <Collapsible collapsed={!isActive}>
              <View className="p-3 bg-gray-50">
                <PolicySection content={sectionContent} />
              </View>
            </Collapsible>
          </View>
        );
      })}
    </ScrollView>
  );
};

const PolicySection: React.FC<{ content: PolicySectionContent }> = ({ content }) => {
  return (
    <View className="space-y-2">
      {Object.entries(content).map(([key, value]) => (
        <View key={key}>
          <Text className="font-semibold">{formatTitle(key)}:</Text>
          {renderValue(value)}
        </View>
      ))}
    </View>
  );
};

const renderValue = (value: PolicyValue) => {
  if (Array.isArray(value)) {
    return (
      <View className="ml-4">
        {value.map((item, index) => (
          <Text key={index} className="text-sm">• {item}</Text>
        ))}
      </View>
    );
  } else if (typeof value === "object") {
    return <PolicySection content={value} />;
  } else {
    return <Text className="text-sm ml-2">{value}</Text>;
  }
};

const formatTitle = (title: string): string => {
  return title.replace(/([A-Z])/g, " $1").replace(/_/g, " ").trim();
};
