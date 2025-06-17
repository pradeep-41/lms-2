//src/components/UserDetail.tsx

import React, { useState, useRef } from "react";
import { View, TouchableOpacity, Pressable } from "react-native";
import { ProfileSidebar } from "./ProfileSidebar";
import { useRouter } from "expo-router"; // or useNavigation if you're using @react-navigation/native
import { Text } from "./typography/Text";

export default function ProfileButtonWithDropdown() {
  const router = useRouter();
  const userName = "Janga Bahadur Radha"; // Replace with actual user name from context or props
  const firstIndex = userName
    .split(" ")
    .map((firstIdx) => firstIdx.charAt(0).toUpperCase())
    .join("");

  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<View>(null);

  const handleLogout = () => {
    setProfileOpen(false);
    router.replace("/"); // Or push("/login") if you have a login screen
  };

  return (
    <View ref={profileRef} className="relative">
      
      {/* Profile Button */}
      <TouchableOpacity
        onPress={() => setProfileOpen(!profileOpen)}
        className="p-2 flex-row items-center">
        <View className="rounded-full border-2 border-lime-800 h-14 w-14 items-center justify-center">
          <Text variant="title" className="text-center">{firstIndex}</Text>
        </View>
      </TouchableOpacity>

      {/* Profile Dropdown */}
      <ProfileSidebar
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
        userName={userName}
        onLogout={handleLogout} // pass logout handler
      />

      {/* Overlay to catch outside clicks */}
      {profileOpen && (
        <Pressable
          className="fixed inset-0 bg-transparent"
          onPress={() => setProfileOpen(false)}
        />
      )}
    </View>
  );
}
