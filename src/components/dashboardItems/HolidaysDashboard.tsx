import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { Text } from "../typography/Text";
import { Box } from "../Box";
import { LineChart } from "react-native-chart-kit";

export const HolidaysDashboard = () => {
  const [showAllHolidays, setShowAllHolidays] = useState(false);
  const [showAllNotices, setShowAllNotices] = useState(false);

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [20, 25, 30, 35, 40, 49, 0, 0, 0, 0, 10, 0],
        color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: "#3B82F6",
    },
  };

  const holidayData = [
    {
      daysLeft: 69,
      title: "Teel - Ladies only (1)",
      date: "Tuesday, August 24th, 2025",
    },
    {
      daysLeft: 103,
      title: "Dashain (6)",
      date: "Monday, September 29th, 2025 — Saturday, October 4th, 2025",
    },
    {
      daysLeft: 124,
      title: "Tihar (5)",
      date: "Monday, October 20th, 2025 — Friday, October 24th, 2025",
    },
    {
      daysLeft: 197,
      title: "New Year (AD) (1)",
      date: "Thursday, January 1st, 2026",
    },
    {
      daysLeft: 210,
      title: "Additional Holiday 1",
      date: "Monday, January 14th, 2026",
    },
    {
      daysLeft: 225,
      title: "Additional Holiday 2",
      date: "Tuesday, February 2nd, 2026",
    },
  ];

  const noticeData = [
    { title: "Remote work login", date: "Tuesday, May 20th, 2025" },
    { title: '"Good Morning" message', date: "Friday, May 16th, 2025" },
    { title: "Notice for labor day", date: "Friday, April 28th, 2023" },
    { title: "New Year 2080", date: "Thursday, April 13th, 2023" },
    { title: "Additional Notice 1", date: "Monday, June 1st, 2025" },
    { title: "Additional Notice 2", date: "Wednesday, June 10th, 2025" },
  ];

  return (
    <>
      <Box className="bg-white rounded-xl p-5 mb-5 ">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-gray-800">
            Total Holidays & Leaves
          </Text>
          <Text className="text-3xl font-bold text-blue-600">49</Text>
        </View>

        {/* Line Chart */}
        <View className="mb-6">
          <ScrollView horizontal={true}>
            <LineChart
              data={chartData}
              width={Dimensions.get("window").width * 1.5}
              height={200}
              chartConfig={chartConfig}
              bezier
              style={{
                borderRadius: 16,
                paddingRight: 30,
              }}
            />
          </ScrollView>
        </View>

        <View className="space-y-4">
          {[
            {
              label: "Festive Holidays",
              count: 14,
              color: "bg-purple-100",
              textColor: "text-purple-800",
            },
            {
              label: "Paid Leave",
              count: 18,
              color: "bg-green-100",
              textColor: "text-green-800",
            },
            {
              label: "Sick Leave",
              count: 15,
              color: "bg-yellow-100",
              textColor: "text-yellow-800",
            },
            {
              label: "Ladies Holidays",
              count: 2,
              color: "bg-pink-100",
              textColor: "text-pink-800",
            },
          ].map((item, index) => (
            <View key={index} className="flex-row items-center justify-between">
              <View
                className={`${item.color} ${item.textColor} rounded-full px-3 py-1`}>
                <Text className="text-sm font-medium">{item.label}</Text>
              </View>
              <Text className="text-lg font-semibold">{item.count}</Text>
            </View>
          ))}
        </View>
      </Box>

      {/* Upcoming Holidays Section */}
      <Box className="bg-white rounded-xl p-5 mb-5">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-gray-800">
            Upcoming Holidays
          </Text>
          <TouchableOpacity
            onPress={() => setShowAllHolidays(!showAllHolidays)}>
            <Text className="text-blue-600 font-medium">
              {showAllHolidays ? "Show Less" : "View All"}
            </Text>
          </TouchableOpacity>
        </View>

        {(showAllHolidays ? holidayData : holidayData.slice(0, 3)).map(
          (holiday, index) => (
            <View
              key={index}
              className="mb-4 pb-4 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0">
              <View className="flex-row items-start">
                <View className="bg-blue-50 rounded-lg p-2 mr-3">
                  <Text className="text-xl font-bold text-blue-600">
                    {holiday.daysLeft}
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className="text-xs text-gray-500 mb-1">Days Left</Text>
                  <Text className="font-medium text-gray-800 mb-1">
                    {holiday.title}
                  </Text>
                  <Text className="text-sm text-gray-600">{holiday.date}</Text>
                </View>
              </View>
            </View>
          )
        )}
      </Box>

      {/* Notice Board Section */}
      <Box className="bg-white rounded-xl p-5 mb-5">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-gray-800">Notice Board</Text>
          <TouchableOpacity onPress={() => setShowAllNotices(!showAllNotices)}>
            <Text className="text-blue-600 font-medium">
              {showAllNotices ? "Show Less" : "View All"}
            </Text>
          </TouchableOpacity>
        </View>

        {(showAllNotices ? noticeData : noticeData.slice(0, 3)).map(
          (notice, index) => (
            <View
              key={index}
              className="mb-3 pb-3 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0">
              <Text className="font-medium text-gray-800 mb-1">
                {notice.title}
              </Text>
              <Text className="text-sm text-gray-500">{notice.date}</Text>
            </View>
          )
        )}
      </Box>
    </>
  );
};
