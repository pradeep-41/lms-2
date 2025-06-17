import { TouchableOpacity, View } from "react-native";
import { ProfileSidebarProps } from "../types/types";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "./typography/Text";

type SidebarItem = {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    onPress: () => void;
};

const SidebarButton: React.FC<{ item: SidebarItem }> = ({ item }) => (
    <TouchableOpacity
        className="flex-row items-center py-2 px-1"
        onPress={item.onPress}
    >
        <Ionicons name={item.icon} size={18} color="#4b5563" />
        <Text className="ml-2 text-gray-700">{item.label}</Text>
    </TouchableOpacity>
);




export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
    open,
    onClose,
    onLogout,
    onChangePassword,
    onSeeProfile,
    userName,
}) => {
    if (!open) return null;

    const items: SidebarItem[] = [
        {
            icon: "person-outline",
            label: "Profile",
            onPress: onSeeProfile ? onSeeProfile : onClose,
        },
        {
            icon: "key-outline",
            label: "Change Password",
            onPress: onChangePassword ? onChangePassword : onClose,
        },
        {
            icon: "log-out-outline",
            label: "Logout",
            onPress: onLogout ? onLogout : onClose,
        },
    ];

    return (
        <View className="absolute top-16 right-0 bg-white p-3 rounded-md shadow-md z-20 w-56 border border-gray-200">
            <Text align="center" >{userName}</Text>
            {items.map((item) => (
                <SidebarButton key={item.label} item={item} />
            ))}
        </View>
    );
};