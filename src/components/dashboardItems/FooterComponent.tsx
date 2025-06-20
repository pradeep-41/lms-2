import { View } from "react-native";
import { LeaveData } from "./LeaveData";
import DashboardCard from "./DashboardCard";
import { HolidaysDashboard } from "./HolidaysDashboard";

// Footer Component remains unchanged
export const FooterComponent = () => {
  return (
    <View className="mt-4 px-1 w-full">
      <LeaveData title="On Leave" />
      <LeaveData
        title="Half-Day Leave"
        emptyMessage="No half-day leaves today"
      />
      <LeaveData
        title="On Vacation"
        data={[
          { id: "1", name: "John Doe" },
          { id: "2", name: "Jane Smith" },
        ]}
      />

      <View className="mt-4 gap-3">
        <DashboardCard
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
        />
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
