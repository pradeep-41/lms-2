import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from "react-native";
import { presentUsers } from "../../utils/users";
import { Text } from "../typography/Text";
import { Users } from "../../types/users.types";
import { LeaveData } from "./LeaveData";
import DashboardCard from "./DashboardCard";
import { Box } from "../Box";
import { MyModal } from "./MyModal";
import { HolidaysDashboard } from "./HolidaysDashboard";

// Helper functions
const getFirstName = (fullName: string) => fullName.split(" ")[0];
const getInitials = (fullName: string) =>
  fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

// UserCard Component
const UserCard: React.FC<{ user: Users }> = ({ user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const firstName = getFirstName(user.fullname);
  const initials = getInitials(user.fullname);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <TouchableOpacity onPress={toggleModal} activeOpacity={0.7}>
        <View className="items-center mb-3 p-2">
          <View className="w-14 h-14 rounded-full bg-blue-100 justify-center items-center mb-1.5">
            <Text className="text-blue-700 font-bold text-base">
              {initials}
            </Text>
          </View>
          <Box variant="center">
            <Text>{firstName}</Text>
          </Box>
        </View>
      </TouchableOpacity>
      <MyModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        initials={initials}
        user={user}
      />
    </>
  );
};

// UserSection Component
const UserSection: React.FC<{
  title: string;
  data: Users[];
}> = ({ title, data }) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 32) / 3;

  return (
    <View className="mb-5">
      <Text className="text-lg font-semibold mb-3 px-2">{`${title} (${data.length})`}</Text>
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

// Main Component
const PresentUsers: React.FC = () => {
  const officeUsers = presentUsers.filter((u) => u.isFromOffice);
  const remoteUsers = presentUsers.filter((u) => !u.isFromOffice);

  return (
    <FlatList
      className="flex-1 px-2"
      contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 10 }}
      data={[
        { title: "In Office", data: officeUsers },
        { title: "Working Remotely", data: remoteUsers },
      ]}
      keyExtractor={(item) => item.title}
      ListFooterComponent={<FooterComponent />}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={Platform.OS === "android"}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={10}
      renderItem={({ item }) => (
        <UserSection title={item.title} data={item.data} />
      )}
    />
  );
};

// Footer Component
const FooterComponent = () => {
  return (
    <View className="mt-4 px-2">
      <LeaveData title="On Leave" />
      <LeaveData title="Half-Day Leave" emptyMessage="No half-day leaves today" />
      <LeaveData
        title="On Vacation"
        data={[
          { id: "1", name: "John Doe" },
          { id: "2", name: "Jane Smith" },
        ]}
      />

      <View className="mt-4 gap-3">
        {/* <DashboardCard
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
        /> */}
        <DashboardCard
          title="Paid Leave"
          buttonLabels={[
            "0 Days Available",
            "0 Days Taken",
            "0 Days Remaining",
          ]}
        />
        <HolidaysDashboard />
      </View>
    </View>
  );
};


export default PresentUsers;
