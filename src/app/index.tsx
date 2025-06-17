import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center my-5 py-5">
      <Text className="text-2xl text-blue-400 font-semibold">
        Resimator LMS
      </Text>
      <TouchableOpacity className="bg-blue-500 rounded px-3 py-2 mt-5">
        <Link href="/home/admin" className="text-white text-xl font-medium">Log in</Link>
      </TouchableOpacity>
    </View>
  );
}
