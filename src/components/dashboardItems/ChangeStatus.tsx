import { Text, TouchableOpacity, View } from "react-native";

type ChangeStatusProps = {
  showOfficeUsers: boolean;
  setShowOfficeUsers: (value: boolean) => void;
};

export const ChangeStatus = ({
  setShowOfficeUsers,
  showOfficeUsers,
}: ChangeStatusProps) => {
  return (
    <View
    className="flex-1 flex-row gap-5 justify-center my-2.5"
     >
      <TouchableOpacity
        className={`px-3 py-2 rounded-md mr-2.5 w-44 ${showOfficeUsers ? "bg-blue-500" : "bg-gray-200"}`}
        onPress={() => setShowOfficeUsers(true)}>
        <Text
          className={`py-2 text-base font-semibold text-center ${showOfficeUsers ? "text-white" : "text-black"}`}>
           Office
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`px-3 py-2 w-44 rounded-md ${!showOfficeUsers ? "bg-blue-500" : "bg-gray-200"}`}
        onPress={() => setShowOfficeUsers(false)}>
        <Text
          className={`py-2 text-base font-semibold text-center ${!showOfficeUsers ? "text-white" : "text-black"}`}>
           Remotely
        </Text>
      </TouchableOpacity>
    </View>
  );
};
