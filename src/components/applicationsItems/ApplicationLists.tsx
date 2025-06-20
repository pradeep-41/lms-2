import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export const ApplicationsLists = () => {
  const filterValue = [
    { id: "all", value: "All" },
    { id: "pending", value: "Pending" },
    { id: "granted", value: "Granted" },
    { id: "rejected", value: "Rejected" },
    { id: "cancelled", value: "Cancelled" },
  ];

  const rectFilters = [
    { id: "more-filters", value: "More Filters", iconName: "menu-outline" },
    { id: "clear-filters", value: "Clear Filters", iconName: "ban" },
  ];

 

  return (
    <View className="flex-1 ">
      <View className="flex flex-row justify-between items-center mb-5">
        {rectFilters.map((val) => (
          <TouchableOpacity className="border border-gray-500 flex flex-row items-center rounded px-2 py-3" key={val.id}>
              <Ionicons name={val.iconName} size={20} color="black" />
            <Text className="text-center  text-2xl w-36 ">
            

              {val.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filterValue.map((val) => (
          <TouchableOpacity key={val.id} className="">
            <Text className="mx-2 my-1 border py-4 text-center rounded-full text-gray-800 text-xl w-32 border-blue-400">
              {val.value}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
