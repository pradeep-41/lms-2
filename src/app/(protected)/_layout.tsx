import React, { useEffect, useState } from "react";
import { Pressable, View, TouchableOpacity } from "react-native";
import { Slot, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Sidebar from "@/src/components/layout/Sidebar";
import { DateDisplay } from "@/src/components/DateDisplay";
import ProfileButtonWithDropdown from "@/src/components/UserDetail";

export default function ProtectedLayout() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Pressable
      className="flex-1 bg-gray-100"
      onPress={() => open && setOpen(false)}>
      {/* Top Navigation Bar */}
      <View className="flex-row justify-between items-center h-16 px-4  border-b border-gray-200">
        {/* Single Menu Button */}
        <TouchableOpacity onPress={() => setOpen(!open)} className="p-2 z-10">
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>

        <DateDisplay />

        {/* Profile Section */}
        <ProfileButtonWithDropdown />
      </View>

      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <View className="flex-1 py-5 px-4">
        <Slot />
      </View>
    </Pressable>
  );
}
