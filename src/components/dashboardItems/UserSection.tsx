import { Users } from "@/src/types/users.types";
import { FlatList, Text, useWindowDimensions, View } from "react-native";
import { UserCard } from "./UserCard";

// UserSection Component remains unchanged
export const UserSection: React.FC<{
  title: string;
  data: Users[];
}> = ({ title, data }) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 32) / 3;

  return (
    <View className="mb-5">
      <Text className="text-lg font-semibold mb-3 px-2">{`${title} `}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={{ width: cardWidth }}>
            <UserCard user={item} />
          </View>
        )}
        scrollEnabled={false}
        contentContainerStyle={{ paddingHorizontal: 4 }}
      />
    </View>
  );
};