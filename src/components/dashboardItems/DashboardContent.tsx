import React from "react";
import {  View } from "react-native";
import PresentUsers from "./PresentUsers";

const DashboardContent = () => {
  return (
    <View className="flex-1">
      <PresentUsers />
    </View>
  );
};

export default DashboardContent;
