import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Link, usePathname } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { links } from "@/src/utils/navigation/sidebarLinks";
import { Text } from "../typography/Text";

type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

const Sidebar: React.FC<Props> = ({ open, setOpen }) => {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <View className="bg-blue-900 rouned p-4 min-h-screen shadow-lg  space-y-2 absolute top-16 left-0 z-20">
          {links.map((link) => {
            const isActive = pathname.includes(link.href.replace("/page", ""));
            return (
              <Link key={link.href} href={link.href as any} asChild>
                <TouchableOpacity
                  className={`flex-row items-center space-x-3 gap-4 rounded px-3 py-2 ${
                    isActive ? "bg-blue-700" : "hover:bg-blue-800"
                  }`}
                  onPress={() => setOpen(false)} // Close sidebar when a link is clicked
                >
                  <Ionicons name={link.icon as any} size={20} color="white" />
                  <Text color="white">{link.label}</Text>
                </TouchableOpacity>
              </Link>
            );
          })}
        </View>
      )}
    </>
  );
};

export default Sidebar;