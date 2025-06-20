import { Users } from "@/src/types/users.types";
import { MaterialIcons } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";

type ModalProps = {
isModalVisible: boolean;
toggleModal: () => void;
initials: React.ReactNode;
user: Users;
}

export const UserModal = ({isModalVisible,toggleModal,initials,user }: ModalProps) => {
  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleModal}>
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="w-[85%] bg-white rounded-xl p-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold">User Details</Text>
            <TouchableOpacity onPress={toggleModal} className="p-1">
              <MaterialIcons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <View className="items-center">
            <View className="w-20 h-20 rounded-full bg-blue-100 justify-center items-center mb-5">
              <Text className="text-blue-700 font-bold text-2xl">
                {initials}
              </Text>
            </View>

            <View className="flex-row justify-between w-full py-2 border-b border-gray-100">
              <Text className="font-semibold text-gray-600">Full Name:</Text>
              <Text className="font-medium">{user.fullname}</Text>
            </View>

            <View className="flex-row justify-between w-full py-2 border-b border-gray-100">
              <Text className="font-semibold text-gray-600">Status:</Text>
              <Text className="font-medium">
                {user.isFromOffice ? "In Office" : "Working Remotely"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
