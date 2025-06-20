import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Notice = {
  title: string;
  date: string;
  description: string;
};

const notices: Notice[] = [
  {
    title: "Remote work login",
    date: "Tuesday, May 20th, 2025",
    description: `Hello everyone, 
I would like to remind you about an important part of our remote work routine.
All employees are expected to begin work by 9:00 AM Nepal Time, unless your team follows a different approved schedule. If something unexpected happens to prevent you from logging in on time, please let HR know within 15 minutes of your start time. To support coordination and a sense of connection among the team, all remote employees must send a "Good Morning" message in the designated daily attendance channel when starting their workday. This lets everyone know you're online and available.
Please make sure:

The "Good Morning" message is sent as soon as you begin work.
You stay online and accessible after posting the message.
Avoid using your mobile just to send the message and then going offline—this defeats the check-in purpose.
We have noticed that many colleagues have consistently followed this practice. Thank you! Your commitment is truly appreciated. For those who haven't yet made it a habit, we encourage you to start now and make it part of your daily routine. Note: While the standard start time is 9:00 AM NP Time, some teams may follow a different schedule depending on project or client requirements. Please follow the timing that applies to your assigned team.
Thank you for your cooperation and professionalism!`,
  },
  {
    title: '"Good Morning" message',
    date: "Friday, May 16th, 2025",
    description: `Hello everyone!
I want to draw your attention to an important matter. We currently have almost all colleagues working remotely, and as you know. Previously, I announced that everyone should post a "Good Morning" message when they start their workday. While some of you have been consistently doing this, It is really appreciated, but others have not.I strongly encourage all remote colleagues to make it a daily habit to drop a "Good Morning" message when you log in. This helps foster a sense of connection and lets us know you're available. Thank you for being so cooperative!`,
  },
];

export default function NoticeBoard() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const openModal = (notice: Notice) => {
    setSelectedNotice(notice);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedNotice(null);
  };

  const renderItem = ({ item }: { item: Notice }) => (
    <View className="bg-white rounded-xl p-5 mb-4 shadow relative">
      <View className="flex flex-row justify-between items-start">
        <Text className="text-xl font-semibold flex-1 pr-2">{item.title}</Text>
        <TouchableOpacity
          onPress={() => openModal(item)}
          accessibilityLabel={`View details of ${item.title}`}
        >
          <MaterialCommunityIcons name="eye" size={26} color="#2563EB" />
        </TouchableOpacity>
      </View>
      <Text className="text-gray-600 mb-3">{item.date}</Text>
      <Text className="text-gray-700" numberOfLines={2}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-100">
      <FlatList
        data={notices}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 12,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={closeModal}
      >
        <Pressable
          className="flex-1 bg-black bg-opacity-40 justify-center items-center"
          onPress={closeModal}
        >
          <Pressable
            className="bg-white rounded-2xl p-6 w-11/12 max-w-md"
            onPress={(e) => e.stopPropagation()}
          >
            <Text className="text-2xl font-bold mb-6 text-center">
              Notice Details
            </Text>

            {selectedNotice && (
              <>
                <Text className="font-semibold text-gray-700">Title</Text>
                <Text className="text-gray-900 mb-4">{selectedNotice.title}</Text>

                <Text className="font-semibold text-gray-700">Date</Text>
                <Text className="text-gray-900 mb-4">{selectedNotice.date}</Text>

                <Text className="font-semibold text-gray-700">Description</Text>
                <Text className="text-gray-900 mb-4 whitespace-pre-line">
                  {selectedNotice.description}
                </Text>
              </>
            )}

            <TouchableOpacity
              onPress={closeModal}
              className="bg-blue-600 rounded-lg py-3 mt-4"
              accessibilityLabel="Close details modal"
            >
              <Text className="text-white text-center font-semibold text-lg">
                Close
              </Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
