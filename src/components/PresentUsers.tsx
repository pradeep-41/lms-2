import React from "react";
import { View, FlatList } from "react-native";
import { presentUsers } from "../utils/users";
import { Text } from "./typography/Text";
import { Users } from "../types/users";

// UserCard Component
const UserCard: React.FC<{ user: Users }> = ({ user }) => {
  const cardStyle = user.isFromOffice 
    ? "bg-blue-50 border-l-4 border-blue-500"
    : "bg-green-50 border-l-4 border-green-500";

  const statusDot = user.isActive ? "bg-green-500" : "bg-red-500";

  return (
    <View className={`w-[48%] m-[1%] mb-2 p-3 rounded-lg shadow ${cardStyle}`}>
      <Text className="text-base font-semibold mb-1">{user.fullname}</Text>
      <View className="flex-row items-center">
        <View className={`w-2 h-2 rounded-full mr-2 ${statusDot}`} />
        <Text className="text-xs text-gray-600">
          {user.isActive ? "Active" : "Inactive"} • {user.isFromOffice ? "Office" : "Remote"}
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
        scrollEnabled={false} // Let outer scroll handle it
        columnWrapperStyle={{ justifyContent: "flex-start" }}
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
      className="flex-1 p-3"
      data={[{ title: "Office Users", data: officeUsers }, { title: "Remote Users", data: remoteUsers }]}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => <UserSection title={item.title} data={item.data} />}
    />
  );
};

export default PresentUsers;
