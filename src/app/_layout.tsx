// app/_layout.tsx
import { Stack } from 'expo-router';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import "../styles/global.css";

function SafeLayout({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();

  return (
    <View
className="flex-1 bg-gray-50 pl-0"      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <View className="flex-1">
        {children}
      </View>
    </View>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeLayout>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeLayout>
    </SafeAreaProvider>
  );
}


