import React, { useState } from "react";
import { View, FlatList, Platform, TouchableOpacity, Text } from "react-native";
import { presentUsers } from "../../utils/users";
import { ChangeStatus } from "./ChangeStatus";
import { FooterComponent } from "./FooterComponent";
import { UserSection } from "./UserSection";
import { Users } from "@/src/types/users.types";

const PresentUsers: React.FC = () => {
  const [showOfficeUsers, setShowOfficeUsers] = useState(true);
  const [showAll, setShowAll] = useState(false);

  // Sort users alphabetically
  const sortAlphabetically = (users:Users[]) =>
    [...users].sort((a, b) => a.fullname.localeCompare(b.fullname));

  const officeUsers = sortAlphabetically(
    presentUsers.filter((u) => u.isFromOffice)
  );
  const remoteUsers = sortAlphabetically(
    presentUsers.filter((u) => !u.isFromOffice)
  );

  const currentUsers = showOfficeUsers ? officeUsers : remoteUsers;

  // Slice users based on showAll state
  const usersToShow = showAll ? currentUsers : currentUsers.slice(0, 6);

  const toggleData = [
    {
      title: showOfficeUsers ? "In Office" : "Working Remotely",
      data: usersToShow,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        className="flex-1 px-[5%]"
        contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 10 }}
        data={toggleData}
        ListHeaderComponent={
          <ChangeStatus
            showOfficeUsers={showOfficeUsers}
            setShowOfficeUsers={(val) => {
              setShowOfficeUsers(val);
              setShowAll(false); // reset showAll on toggle
            }}
          />
        }
        keyExtractor={(item) => item.title}
        ListFooterComponent={
          <>
            {currentUsers.length > 6 && (
              <TouchableOpacity
                onPress={() => setShowAll(!showAll)}
                className="bg-blue-600 rounded py-2 my-3"
              >
                <Text className="text-center text-white font-medium">
                  {showAll ? "Show Less" : "Show More"}
                </Text>
              </TouchableOpacity>
            )}
            <FooterComponent />
          </>
        }
        alwaysBounceVertical
        removeClippedSubviews={Platform.OS === "android"}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        renderItem={({ item }) => (
          <UserSection title={item.title} data={item.data} />
        )}
      />
    </View>
  );
};

export default PresentUsers;
