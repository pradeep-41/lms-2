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
import { holidays } from "../../utils/office-holidays";
import { Holidays } from "@/src/types/holidays";

export default function HolidayList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHoliday, setSelectedHoliday] = useState<Holidays | null>(null);

  const openModal = (holiday: Holidays) => {
    setSelectedHoliday(holiday);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedHoliday(null);
  };

  const renderItem = ({ item }: { item: Holidays }) => {
    const durationText =
      item.startDate === item.endDate
        ? `${item.startDate} - [1 Day]`
        : `${item.startDate} → ${item.endDate}`;

    return (
      <View className="bg-white rounded-xl p-5 mb-4 shadow relative mx-4">
        <View className="flex flex-row justify-between items-start">
          <Text className="text-xl font-semibold mb-1 flex-1 pr-2">
            {item.title}
          </Text>
          <TouchableOpacity
            onPress={() => openModal(item)}
            accessibilityLabel={`View details of ${item.title}`}
          >
            <MaterialCommunityIcons name="eye" size={26} color="#2563EB" />
          </TouchableOpacity>
        </View>
        <Text className="text-gray-600 mb-3">{durationText}</Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-gray-100">
      <FlatList
        data={holidays}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingVertical: 12,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
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
              Holiday Details
            </Text>

            {selectedHoliday && (
              <>
                <Text className="font-semibold text-gray-700">Title</Text>
                <Text className="text-gray-900 mb-4">
                  {selectedHoliday.title}
                </Text>

                <Text className="font-semibold text-gray-700">Start Date</Text>
                <Text className="text-gray-900 mb-4">
                  {selectedHoliday.startDate}
                </Text>

                <Text className="font-semibold text-gray-700">End Date</Text>
                <Text className="text-gray-900 mb-4">
                  {selectedHoliday.endDate}
                </Text>

                <Text className="font-semibold text-gray-700">Description</Text>
                <Text className="text-gray-900 mb-4">
                  {selectedHoliday.description}
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
