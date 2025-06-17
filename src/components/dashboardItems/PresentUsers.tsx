import React from "react";
import { View, FlatList } from "react-native";
import { presentUsers } from "../../utils/users";
import { Text } from "../typography/Text";
import { Users } from "../../types/users.types";
import { Leave } from "./Leave";
import DashboardCard from "./DashboardCard";

// UserCard Component
const UserCard: React.FC<{ user: Users }> = ({ user }) => {
  const statusDot = user.isActive ? "bg-green-500" : "bg-red-500";

  return (
    <View className="flex-1 m-2 p-3 rounded-lg shadow border border-cyan-950">
      <Text className="text-base font-semibold mb-1">{user.fullname}</Text>
      <View className="flex-row items-center">
        <View className={`w-2 h-2 rounded mr-2 ${statusDot}`} />
        <Text className="text-xs text-gray-600">
          {user.isActive ? "Active" : "Inactive"}
        </Text>
      </View>
    </View>
  );
};

// UserSection Component (reusable list section)
const UserSection: React.FC<{
  title: string;
  data: Users[];
}> = ({ title, data }) => {
  return (
    <View className="mb-4">
      <Text className="text-lg font-bold mb-2">{`${title} (${data.length})`}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <UserCard user={item} />}
        scrollEnabled={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

// Main Component
const PresentUsers: React.FC = () => {
  const officeUsers = presentUsers.filter((u) => u.isFromOffice);
  const remoteUsers = presentUsers.filter((u) => !u.isFromOffice);

  return (
    <FlatList
      className="flex-1 p-2"
      data={[
        { title: "Office Users", data: officeUsers },
        { title: "Remote Users", data: remoteUsers },
      ]}
      keyExtractor={(item) => item.title}
      ListFooterComponent={<OuterForFooterComp />}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <UserSection title={item.title} data={item.data} />
      )}
    />
  );
};

export default PresentUsers;

// Footer component
const OuterForFooterComp = () => {
  return (
    <>
      <Leave title="Who's on Half-Day Leave" />
      <Leave title="Who's on Leave" />

      <DashboardCard
        title="Festive Holidays"
        buttonLabels={["0 Days Available", "16 Days Celebrated"]}
      />
      <DashboardCard
        title="Casual/Sick Leave"
        buttonLabels={[
          "0 Days Available",
          "0 Days Requested",
          "0 Days Approved",
        ]}
      />
      <DashboardCard
        title="Paid Leave"
        buttonLabels={[
          "0 Days Available",
          "0 Days Taken",
          "0 Days Remaining",
        ]}
      />
    </>
  );
};
