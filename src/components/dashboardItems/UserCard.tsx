import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Users } from "@/src/types/users.types";
import { UserModal } from "./UserModal";

// Helper functions
const getFirstName = (fullName: string) => fullName.split(" ")[0];
const getInitials = (fullName: string) =>
  fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

// UserCard Component with fixed width handling
export const UserCard: React.FC<{ user: Users }> = ({ user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const firstName = getFirstName(user.fullname);
  const initials = getInitials(user.fullname);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Adjust font size based on name length
  // const getFontSize = (name: string) => {
  //   if (name.length > 12) return 10;
  //   if (name.length > 8) return 12;
  //   return 14;
  // };

  // const fontSize = getFontSize(firstName);

  return (
    <>
      <TouchableOpacity onPress={toggleModal} activeOpacity={0.7}>
        <View className="mb-3 p-2 mx-auto my-1 w-32">
          <View className="w-14 h-14 rounded-full bg-blue-100 justify-center items-center mb-1.5">
            <Text className="text-blue-700 font-bold text-base">
              {initials}
            </Text>
          </View>
          <View>
            <Text

            // style={{ fontSize }}
            >
              {firstName}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <UserModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        initials={initials}
        user={user}
      />
    </>
  );
};
